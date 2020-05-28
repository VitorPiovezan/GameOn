package models

import (
	"github.com/jinzhu/gorm"
)

type Like struct {
	ID       uint32 `gorm: primary_key;auto_increment" json:"id"`
	UserID   uint32 `json: "userid"`
	TargetID uint32 `json: "targetid"`
}

func (l *Like) SaveLikes(db *gorm.DB) (*Like, error) {

	var err error
	err = db.Debug().Create(&l).Error
	if err != nil {
		return &Like{}, err
	}
	return l, nil
}
