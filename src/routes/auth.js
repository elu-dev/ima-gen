const path = require('path')
const router = require('express').Router()

// auth login
router.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, '/../views/login.html'))
})

module.exports = router