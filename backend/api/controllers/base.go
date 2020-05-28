package controllers

import (
	"GameOn/backend/api/models"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql" //mysql database driver
)

type Server struct {
	DB     *gorm.DB
	Router *mux.Router
}

func (server *Server) Initialize(Dbdriver, DbUser, DbPassword, DbPort, DbHost, DbName string) {

	var err error

	if Dbdriver == "mysql" {
		DBURL := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", DbUser, DbPassword, DbHost, DbPort, DbName)
		server.DB, err = gorm.Open(Dbdriver, DBURL)
		if err != nil {
			fmt.Printf("Cannot connect to %s database", Dbdriver)
			log.Fatal("This is the error:", err)
		} else {
			fmt.Printf("We are connected to the %s database", Dbdriver)
		}
	}
	server.DB.Debug().AutoMigrate(&models.User{}) //table migration
	server.DB.Debug().AutoMigrate(&models.Like{}) //table migration
	server.DB.Debug().AutoMigrate(&models.Game{}) //table migration

	//foreign keys
	server.DB.Model(&models.Like{}).AddForeignKey("user_id", "users(id)", "RESTRICT", "RESTRICT")
	server.DB.Model(&models.Like{}).AddForeignKey("target_id", "users(id)", "RESTRICT", "RESTRICT")
	server.DB.Model(&models.Game{}).AddForeignKey("gender_id", "game_genders(id)", "RESTRICT", "RESTRICT")

	server.Router = mux.NewRouter()

	server.initializeRoutes()
}

func (server *Server) Run(addr string) {

	fmt.Println("Listening to port " + addr + "!")
	log.Fatal(http.ListenAndServe(addr, handlers.CORS()(server.Router)))
}
