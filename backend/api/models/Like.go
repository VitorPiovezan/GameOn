package models

import "github.com/jinzhu/gorm"

type Like struct {
	UserId   uint `gorm:"foreignkey:ID"` //foreign key no banco de dados
	targetId uint
}

func (l *Like) SaveLikes(db *gorm.DB) (*Like, error) {

	var err error
	err = db.Debug().Create(&l).Error
	if err != nil {
		return &Like{}, err
	}
	return l, nil
}
