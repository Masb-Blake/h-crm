package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgx/v5"
	"github.com/joho/godotenv"
)

func Connect(ctx context.Context) {
	fmt.Println("connecting to DB")
	osErr := godotenv.Load(".env")
	if osErr != nil {
		log.Fatalf("Error loading .env file: %v\n", osErr)
	}

	conn, err := pgx.Connect(ctx, os.Getenv("DB_URL"))
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}

	defer conn.Close(ctx)

	var greeting string
	err = conn.QueryRow(ctx, "select 'Hello World!'").Scan(&greeting)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Query Row Failed: %v\n", err)
	}

	fmt.Println(greeting)
}
