package utils

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func Encode[T any](w http.ResponseWriter, r *http.Request, status int, v T) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	if err := json.NewEncoder(w).Encode(v); err != nil {
		return fmt.Errorf("encode json: %w", err)
	}
	return nil
}

func Decode[T any](r *http.Request) (T, error) {
	var v T
	fmt.Println("Body", r.Body)
	if r.Body == nil {
		panic("No Body")
	}
	if err := json.NewDecoder(r.Body).Decode(&v); err != nil {
		return v, fmt.Errorf("decode json: %w", err)
	}
	return v, nil
}

func DecodeAndRespondFunc[req any, res any](w http.ResponseWriter, r *http.Request, status int, next func(req) (res, error)) error {
	decoded, err := Decode[req](r)
	if err != nil {
		panic("No DecodeAndRespondFunc")
	}

	val, err := next(decoded)
	if err != nil {
		panic("Can't run func")
	}
	err = Encode(w, r, status, val)

	return err
}
