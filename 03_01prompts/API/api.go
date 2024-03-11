package main

import (
    "fmt"
    "net/http"
    "strconv"
)

func echoHandler(w http.ResponseWriter, r *http.Request) {
    message := r.URL.Query().Get("message")
    if message == "" {
        http.Error(w, "Mensaje no proporcionado", http.StatusBadRequest)
        return
    }
    fmt.Fprint(w, message)
}

func sumHandler(w http.ResponseWriter, r *http.Request) {
    num1Str := r.URL.Query().Get("num1")
    num2Str := r.URL.Query().Get("num2")

    num1, err1 := strconv.Atoi(num1Str)
    num2, err2 := strconv.Atoi(num2Str)

    if err1 != nil || err2 != nil {
        http.Error(w, "Los números no son válidos", http.StatusBadRequest)
        return
    }

    sum := num1 + num2
    fmt.Fprint(w, strconv.Itoa(sum))
}

func main() {
    http.HandleFunc("/api/echo", echoHandler)
    http.HandleFunc("/api/sum", sumHandler)
    http.ListenAndServe(":8080", nil)
}