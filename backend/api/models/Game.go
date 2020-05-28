package models

type Game struct {
	Id        uint32 `gorm: primary_key;auto_increment`
	Name      string `gorm:"type:varchar(30);"`
	Gender_id uint32
}
