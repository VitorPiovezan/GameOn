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

	//userid da requicicao - declarar
	//targetid da requisicao - declarar

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
	}
	fmt.Printf("%s", body)
	likes := models.Like{}

	//executa a decodificacao de ids vindas no json da requisicao, e salva o conteudo decodificado em likes (no ENDERECO DE)
	err = json.Unmarshal(body, &likes)
	if err != nil {
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}

	//salva os likes utilizando a funcao SaveLikes - que faz o INSERT  dos dados no banco de dados
	likesRegistered, err := likes.SaveLikes(server.DB)
	isMatch, err := models.VerifyMatch(server.DB, likesRegistered.UserID, likesRegistered.TargetID)
	if !isMatch {
		w.Header().Set("Location", fmt.Sprintf("%s%s/%d, %d", r.Host, r.RequestURI, likesRegistered.TargetID, likesRegistered.UserID))
		responses.JSON(w, http.StatusCreated, likesRegistered)
	} else {
		fmt.Printf("ITS A MATCH BETWEEN %d and %d", likesRegistered.UserID, likesRegistered.TargetID)
		w.Header().Set("Location", fmt.Sprintf("%s%s/%d, %d", r.Host, r.RequestURI, likesRegistered.TargetID, likesRegistered.UserID))
		responses.JSON(w, http.StatusCreated, likesRegistered)
	}

}
