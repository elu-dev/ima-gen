const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('src/views/static'))

app.use('/auth', require('./auth.js'))


app.get('/', (req,res) => {
    res.render('home')
})

app.get('/profile', (req,res) => {
    res.render('profile')
})

app.listen(3000, () => console.log('app http://localhost:3000'))