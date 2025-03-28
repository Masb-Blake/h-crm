package db

type Todo struct {
	Name   string     `json:"name"`
	Status TaskStatus `json:"status"`
}

type TaskStatus int

const (
	NotStarted TaskStatus = iota
	InProgress
	Complete
)
