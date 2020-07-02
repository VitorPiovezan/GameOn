package models

type Game struct {
	ID       uint32 `gorm: primary_key;auto_increment`
	Name     string `gorm:"type:varchar(30);"`
	GenderID uint32
}
