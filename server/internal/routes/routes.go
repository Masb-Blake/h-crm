package routes

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/blake-masb/server/internal/database"
	"github.com/blake-masb/server/internal/middleware"
	"github.com/blake-masb/server/internal/utils"
	"github.com/blake-masb/server/models/db"
	"github.com/gorilla/mux"
)

func NewRouter() http.Handler {
	mux := mux.NewRouter()

	mux.HandleFunc("/ping", pingApi)
	mux.HandleFunc("/task", createTask).Methods("POST")
	// mux.HandleFunc("/task", updateTask).Methods("PUT")
	mux.HandleFunc("/tasks", getTasks).Methods("GET")
	mux.Use(middleware.EnableCors)
	return mux
}

func getTasks(w http.ResponseWriter, r *http.Request) {
	// No auth or users, get all tasks from db

	type Task struct {
		Id   string `db:"id"`
		Name string `db:"name`
		// Status db.TaskStatus `db:"status`
	}

	values, err := database.Select[Task](context.Background(), "select * from public.tasks")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to Query Database: %v\n", err)
	}

	for _, v := range values {
		fmt.Printf("%s: %s\n", v.Id, v.Name)
	}

	utils.Encode(w, r, http.StatusOK, values)
}

func createTask(w http.ResponseWriter, r *http.Request) {
	p := db.Todo{Name: "Test", Status: db.NotStarted}
	err := utils.Encode(w, r, int(http.StatusOK), p)
	if err != nil {
		panic("Nope")
	}
}

type ping struct {
	Test    string `json:"test"`
	Success bool   `json:"success"`
}

func pingApi(w http.ResponseWriter, r *http.Request) {
	resp := ping{Test: "Ping at " + time.Now().Local().GoString(), Success: true}
	err := utils.Encode(w, r, int(http.StatusOK), resp)
	if err != nil {
	}
}
