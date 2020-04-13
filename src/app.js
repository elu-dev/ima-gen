const express = require('express')
const path = require('path')
const app = express()

app.use('/auth', require('./routes/auth.js'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.listen(3000, () => console.log('app now listening for requests on port 3000'))