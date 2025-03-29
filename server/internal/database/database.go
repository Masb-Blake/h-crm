package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgx/v5"
	"github.com/joho/godotenv"
)

func connect(ctx context.Context) *pgx.Conn {
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
	return conn
}

func QueryDatabase(ctx context.Context, query string, v any) error {
	conn := connect(ctx)

	err := conn.QueryRow(ctx, query).Scan(v)

	defer conn.Close(ctx)
	return err
}

func ExecuteQuery(ctx context.Context, query string, args map[string]any) error {
	conn := connect(ctx)

	_, err := conn.Exec(ctx, query, args)

	defer conn.Close(ctx)
	return err
}

func Select[T any](ctx context.Context, sel string) ([]T, error) {
	conn := connect(ctx)

	var value []T

	rows, err := conn.Query(ctx, sel)
	if err != nil {
		return value, err
	}

	values, err := pgx.CollectRows(rows, pgx.RowToStructByName[T])

	return values, err
}
