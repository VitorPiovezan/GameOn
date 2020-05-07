package models

import "github.com/jinzhu/gorm"

type Like struct {
	userId   uint32 `json: "userLogged"`
	targetId uint32 `json: "userTarget"`
}

func (l *Like) SaveLikes(db *gorm.DB) (*Like, error) {

	var err error
	err = db.Debug().Create(&l).Error
	if err != nil {
		return &Like{}, err
	}
	return l, nil
}
