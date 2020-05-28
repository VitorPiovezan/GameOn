package controllers

import (
	"GameOn/backend/api/responses"
	"net/http"
)

func (server *Server) Home(w http.ResponseWriter, r *http.Request) {
	responses.JSON(w, http.StatusOK, "Welcome To This Awesome API")
}

//func que devolvera os dados do usuario para preencher o profile do mesmo na tela do app

/* func (server *Server) HomeScreen(w http.ResponseWriter, r *http.Request) {

}
*/
