const express = require('express')
const passport = require('passport')
const path = require('path')
const app = express()

require('dotenv').config()
require('./config/auth.config')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('src/views/static'))
app.use(express.urlencoded())
app.use(passport.initialize())

app.use('/api/auth', require('./api/auth.js'))


app.get('/', (req,res) => {
    res.render('home')
})

app.get('/profile', passport.authenticate('google', {failureRedirecte:'/', scope: 'profile'}), (req,res) => {
    if (!req.user) res.redirect('/')
    res.render('profile', {user: req.user })
})

app.listen(3000, () => console.log('app http://localhost:3000'))