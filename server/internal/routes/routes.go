package routes

import (
	"fmt"
	"net/http"
	"time"

	"github.com/blake-masb/server/internal/utils"
	"github.com/blake-masb/server/models/request"
	"github.com/blake-masb/server/models/response"
	"github.com/gorilla/mux"
)

func NewRouter() http.Handler {
	mux := mux.NewRouter()

	mux.HandleFunc("/", indexHandler)
	mux.HandleFunc("/api/data", apiDataHandler)
	mux.HandleFunc("/api/test", apiTestHandler)
	mux.HandleFunc("/api/post", apiPostTest).Methods("post")
	mux.HandleFunc("/api/postmethod", apiFunction).Methods("post")

	return mux
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println(w, "Welcome to the ho11111")
}

func apiDataHandler(w http.ResponseWriter, r *http.Request) {
	data := "Data"
	fmt.Println(w, data)
}

func apiTestHandler(w http.ResponseWriter, r *http.Request) {
	p := request.Person{Name: "Blake", Age: 90}
	err := utils.Encode(w, r, int(http.StatusOK), p)
	if err != nil {
		panic("Fuck")
	}
}

func apiPostTest(w http.ResponseWriter, r *http.Request) {
	decoded, err := utils.Decode[response.PersonResponse](r)
	if err != nil {
		panic("Error Decoding")
	}
	err = utils.Encode(w, r, int(http.StatusAccepted), decoded)
}

func apiFunction(w http.ResponseWriter, r *http.Request) {
	err := utils.DecodeAndRespondFunc(w, r, int(http.StatusCreated), handleDecode)
	if err != nil {
		panic("Brokend")
	}
}

func handleDecode(create response.PersonResponse) (response.PersonGenerated, error) {
	fmt.Println("Creating Response")
	response := response.PersonGenerated{Name: create.Name, Age: create.Age, CreatedAt: time.Now()}
	return response, nil
}
