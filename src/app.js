const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('views'))

app.use('/auth', require('./routes/auth.js'))

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(3000, () => console.log('app now listening for requests on port 3000'))