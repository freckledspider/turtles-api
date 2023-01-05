const express = require("express")

const app = express()

app.use(express.json())

const turtles = [
    {name: "Leonardo", role: "ninja"},
    {name: "Michaelangelo", role: "ninja"},
    {name: "Donatello", role: "ninja"},
    {name: "Raphael", role: "ninja"},
]

app.get("/", (req, res) => {
res.json({response: 'hello world'})
})

app.get("/turtles", (req, res) => {
    res.json(turtles)
})

app.get("/turtles/:index", (req, res) => {
    res.json(turtles[req.params.index])
})

app.post("/turtles", (req, res) => {
    turtles.push(req.body)
    res.json(turtles)
})

app.put("/turtles/:index", (req, res) => {
    turtles[req.params.index] = req.body
    res.json(turtles)
})

app.delete("/turtles/:index", (req, res) => {
    turtles.splice(req.params.index, 1)
    res.json(turtles)
})

app.listen(1337, () => console.log("listening on port 1337"))