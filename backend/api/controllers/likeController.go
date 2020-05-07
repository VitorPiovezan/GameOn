package controllers

import (
	"GameOn/backend/api/models"
	"GameOn/backend/api/responses"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func (server *Server) likeUser(w http.ResponseWriter, r *http.Request) {

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
	}
	fmt.Println(body)

	//instancia um  modelo de Like
	likes := models.Like{}

	//executa a decodificacao de ids vinda no json da requisicao, e salva o conteudo decodificado em likes (no ENDERECO DE)
	err = json.Unmarshal(body, &likes)
	if err != nil {
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}
	fmt.Println(likes)

	//para depois, verificar como salvar os dois valores no Banco - userId e targetID, em ambas as colunas
	//likeRegistered, err := likes.SaveLikes(server.DB)

}
