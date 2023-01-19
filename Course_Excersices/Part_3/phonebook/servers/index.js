const express = require('express')
const app = express()

let notes = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})
let now = new Date()
app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for 2 people</p><p> ${now}</p>`)
}
)
app.get('/notes', (request, response) => {
    response.json(notes)
})

app.get('/notes/:id', (request, response) => {
    const id = request.params.id
    console.log(typeof id)
    const note = notes.find(note => note.id === Number(id))
    response.send(note)
    console.log(note)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})