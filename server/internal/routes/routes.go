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
	"github.com/gorilla/mux"
	"github.com/jackc/pgx/v5/pgtype"
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

type Task struct {
	Id   pgtype.UUID `db:"id"`
	Name string      `db:"name"`
	// Status db.TaskStatus `db:"status`
}
type RetTask struct {
	Id   pgtype.UUID `json:"id"`
	Name string      `json:"name"`
}

func getTasks(w http.ResponseWriter, r *http.Request) {
	// No auth or users, get all tasks from db

	values, err := database.Select[Task](context.Background(), "select * from public.tasks")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to Query Database: %v\n", err)
	}

	vals := make([]RetTask, len(values)-1)
	for _, v := range values {
		nt := RetTask{Id: v.Id, Name: v.Name}
		vals = append(vals, nt)
		fmt.Printf("%s: %s\n", v.Id, v.Name)
	}

	utils.Encode(w, r, http.StatusOK, vals)
}

func createTask(w http.ResponseWriter, r *http.Request) {
	t, err := utils.Decode[Task](r)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
	}

	query := fmt.Sprintf("INSERT INTO public.tasks (name) VALUES ('%s') RETURNING id", t.Name)
	var retId pgtype.UUID

	err = database.QueryDatabase(context.Background(), query, &retId)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error executing query: %v\n", err)
		w.WriteHeader(http.StatusNotAcceptable)
	}

	err = utils.Encode(w, r, int(http.StatusCreated), RetTask{Id: retId, Name: t.Name})
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error encoding: %v\n", err)
		w.WriteHeader(http.StatusNotAcceptable)
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
