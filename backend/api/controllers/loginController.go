package controllers

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"GameOn/backend/api/auth"
	"GameOn/backend/api/models"
	"GameOn/backend/api/responses"
	"GameOn/backend/api/utils/formaterror"

	"golang.org/x/crypto/bcrypt"
)

func (server *Server) Login(w http.ResponseWriter, r *http.Request) {

	type loggedUser struct {
		ID       uint32 `json:"id"`
		Name     string `json:"username"`
		Bio      string `json:"bio"`
		PhotoURL string `json:photourl`
		Token    string `json:"token"`
	}

	body, err := ioutil.ReadAll(r.Body)
	fmt.Printf("%s", body)
	if err != nil {
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}
	user := models.User{}
	err = json.Unmarshal(body, &user)
	if err != nil {
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}

	user.Prepare()
	err = user.Validate("login")
	if err != nil {
		fmt.Fprintf(w, "teste")
		responses.ERROR(w, http.StatusUnprocessableEntity, err)
		return
	}
	user, token, err := server.SignIn(user.Email, user.Password)
	if err != nil {
		formattedError := formaterror.FormatError(err.Error())
		responses.ERROR(w, http.StatusUnprocessableEntity, formattedError)
		return
	}

	activeUser := loggedUser{}

	activeUser.ID = user.ID
	activeUser.Name = user.Username
	activeUser.Bio = user.Bio
	activeUser.PhotoURL = user.PhotoURL
	activeUser.Token = token

	responses.JSON(w, http.StatusOK, activeUser)
}

//Func com token

/* func (server *Server) SignIn(email, password string) (string, error) {

	var err error

	user := models.User{}

	err = server.DB.Debug().Model(models.User{}).Where("email = ?", email).Take(&user).Error
	if err != nil {
		return "", err
	}
	err = models.VerifyPassword(user.Password, password)
	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return "", err
	}
	return auth.CreateToken(user.ID)
}
*/

//func devolvendo o objeto usuario

func (server *Server) SignIn(email, password string) (models.User, string, error) {

	var err error

	user := models.User{}

	err = server.DB.Debug().Model(models.User{}).Where("email = ?", email).Take(&user).Error
	if err != nil {
		return user, "", err
	}
	err = models.VerifyPassword(user.Password, password)
	if err != nil && err == bcrypt.ErrMismatchedHashAndPassword {
		return user, "", err
	}
	token, err := auth.CreateToken(user.ID)

	return user, token, err
}
