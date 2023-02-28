package routers

import (
	"net/http"
	"tokenSystem/controllers"
)

func Router() {
	http.HandleFunc("/article", func(w http.ResponseWriter, r *http.Request) {
		controllers.CreateArticle(w, r, controllers.Client)
	})
	http.HandleFunc("/articles", func(w http.ResponseWriter, r *http.Request) {
		controllers.GetAllAricle(w, r, controllers.Client)
	})

}
