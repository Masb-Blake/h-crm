package main

import (
	"fmt"
	"net/http"

	"github.com/blake-masb/server/internal/routes"
)

func main() {
	// Spin up server
	router := routes.NewRouter()
	port := 8080
	addr := fmt.Sprintf(":%d", port)
	fmt.Printf("Listening on port :%d\n", port)

	srv := &http.Server{
		Addr: addr, Handler: router,
	}

	srv.ListenAndServe()
}
