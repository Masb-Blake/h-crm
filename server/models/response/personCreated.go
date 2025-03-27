package response

import (
	"time"
)

type PersonGenerated struct {
	Name      string    `json:"name"`
	Age       int       `json:"age"`
	CreatedAt time.Time `json:"createdAt"`
}
