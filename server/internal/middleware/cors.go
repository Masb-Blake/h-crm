package middleware

import (
	"net/http"
)

func EnableCors(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "https://crm.localhost")
		next.ServeHTTP(w, r)
	})
}
