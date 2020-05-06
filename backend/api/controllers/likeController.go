package controllers

import (
	"GameOn/backend/api/models"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

func (server *Server) likeUser(w http.ResponseWriter, r *http.Request) {

	ids, _ := ioutil.ReadAll(r.Body)
	fmt.Fprintf(w, "%s", ids)

	likes := models.Like{}

	/* err := json.Unmarshal(ids, &likes)
	if err != nil {
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	} */

	var userId, targetId uint32

	decoder := json.NewDecoder(strings.NewReader(ids))

	//para depois, verificar como salvar os dois valores no Banco - userId e targetID, em ambas as colunas
	//likeRegistered, err := likes.SaveLikes(server.DB)

}
