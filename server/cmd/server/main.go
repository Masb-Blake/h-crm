package main

import (
	"fmt"
	"net/http"

	"github.com/blake-masb/server/internal/routes"
)

func main() {
	router := routes.NewRouter()
	port := 8080
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("Listening on port :%d", port)

	srv := &http.Server{
		Addr: addr, Handler: router,
	}

	srv.ListenAndServe()
}
