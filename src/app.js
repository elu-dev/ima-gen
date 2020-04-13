const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('src/static'))

app.use('/auth', require('./routes/auth.js'))

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(3000, () => console.log('app http://localhost:3000'))