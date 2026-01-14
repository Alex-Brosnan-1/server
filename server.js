const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")

const app = express()
const port = 3000

let messages = ["test message"]

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
app.use(bodyParser.json())


app.get('/tester', (req, res) => {
    res.json({
        success: true,
        data: messages
    })
})


app.post('/tester', (req, res) => {
    const { data } = req.body

    if (!data) {
        return res.status(400).json({
            success: false,
            message: "No data provided"
        })
    }

    messages.push(data)

    res.json({
        success: true,
        data: messages
    })
})


app.put('/tester/:index', (req, res) => {
    const index = req.params.index
    const { data } = req.body

    if (!messages[index]) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        })
    }

    messages[index] = data

    res.json({
        success: true,
        data: messages
    })
})


app.delete('/tester/:index', (req, res) => {
    const index = req.params.index

    if (!messages[index]) {
        return res.status(404).json({
            success: false,
            message: "Item not found"
        })
    }

    messages.splice(index, 1)

    res.json({
        success: true,
        data: messages
    })
})


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
