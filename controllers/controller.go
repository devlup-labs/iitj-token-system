package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"tokenSystem/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

const ConnectionString = "mongodb://localhost:27017"
const dataBase = "TokenSystem"
const collectionName = "Token"

func init() {
	var err error
	Client, err = mongo.NewClient(options.Client().ApplyURI(ConnectionString))
	if err != nil {
		log.Fatal(err)
	}

	err = Client.Connect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("database connected.....")
}

func CreateArticle(w http.ResponseWriter, r *http.Request, Client *mongo.Client) {
	if r.Method == http.MethodPost {
		var article models.Article
		err := json.NewDecoder(r.Body).Decode(&article)
		if err != nil {
			// http.Error(w, err.Error(), http.StatusBadRequest)
			log.Fatal(err)
			return
		}

		collection := Client.Database(dataBase).Collection(collectionName)
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

func GetAllAricle(w http.ResponseWriter, r *http.Request, Client *mongo.Client) {
	if r.Method == http.MethodGet {
		var allArticles []models.Article
		collection := Client.Database(dataBase).Collection(collectionName)
		curr, err := collection.Find(context.TODO(), bson.D{})
		if err != nil {
			log.Fatal(err)
			return
		}
		defer curr.Close(context.TODO())
		for curr.Next(context.TODO()) {
			var elem models.Article
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
