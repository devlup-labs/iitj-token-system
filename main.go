package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Article struct {
	Title   string `json:"title"`
	Desc    string `json:"desc"`
	Content string `json:"content"`
}

var client *mongo.Client

const ConnectionString = "mongodb://localhost:27017"
const dataBase = "TokenSystem"
const collectionName = "Token"

func init() {
	var err error
	client, err = mongo.NewClient(options.Client().ApplyURI(ConnectionString))
	if err != nil {
		log.Fatal(err)
	}

	err = client.Connect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("database connected.....")
}

func createArticle(w http.ResponseWriter, r *http.Request, client *mongo.Client) {
	if r.Method == http.MethodPost {
		var article Article
		err := json.NewDecoder(r.Body).Decode(&article)
		if err != nil {
			// http.Error(w, err.Error(), http.StatusBadRequest)
			log.Fatal(err)
			return
		}

		collection := client.Database(dataBase).Collection(collectionName)
		_, err = collection.InsertOne(context.TODO(), article)
		if err != nil {
			log.Fatal(err)
			return
		}

		w.WriteHeader(http.StatusCreated)
		fmt.Fprintln(w, "Succesful Post Request")
	} else {
		http.Error(w, "Internal Server error", http.StatusMethodNotAllowed)
	}
}

func getAllAricle(w http.ResponseWriter, r *http.Request, client *mongo.Client) {
	if r.Method == http.MethodGet {
		var allArticles []Article
		collection := client.Database(dataBase).Collection(collectionName)
		curr, err := collection.Find(context.TODO(), bson.D{})
		if err != nil {
			log.Fatal(err)
			return
		}
		defer curr.Close(context.TODO())
		for curr.Next(context.TODO()) {
			var elem Article
			err := curr.Decode(&elem)
			if err != nil {
				http.Error(w, "Internal Server error", http.StatusInternalServerError)
				return
			}
			allArticles = append(allArticles, elem)
		}
		w.Header().Set("content-Type", "application/json")
		json.NewEncoder(w).Encode(allArticles)
	}
}

func main() {
	clientOptions, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		fmt.Println(err)
		return
	}

	err = clientOptions.Connect(context.TODO())
	if err != nil {
		fmt.Println(err)
		return
	}

	http.HandleFunc("/article", func(w http.ResponseWriter, r *http.Request) {
		createArticle(w, r, client)
	})
	http.HandleFunc("/articles", func(w http.ResponseWriter, r *http.Request) {
		getAllAricle(w, r, client)
	})

	err = http.ListenAndServe(":8081", nil)
	if err != nil {
		fmt.Println(err)
	}
}
