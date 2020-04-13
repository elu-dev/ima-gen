const path = require('path')
const router = require('express').Router()

router.use(require('express').static('views'))


// auth login
router.get('/login', (req,res) => {
    res.render('login')
})

module.exports = router