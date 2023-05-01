package models

import "time"

type TransactionStruct struct {
	TransactionID string    `json:"ID"`
	Timestamp     time.Time `json:"time"`
	Amount        float64   `json:"amount"`
	ToWhom        string    `json:"towhom"`
}

type Student struct {
	Name         string            `json:"name"`
	RollNo       string            `json:"roll"`
	Tokens       string            `json:"tokens"`
	Coupons      string            `json:"coupons"`
	Transactions TransactionStruct `json:"transactions"`
}
