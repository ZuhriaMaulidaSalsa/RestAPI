const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')

// route utama methods GET
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Akses data nutrisi <a href="/food">di sini</a>.')
})

app.get('/food', (req, res) => {
    db.query("SELECT * FROM food", (error, result) =>{
        // hasil data dari sql
        // console.log(result)
        res.json(result)
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})