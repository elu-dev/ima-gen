const router = require('express').Router()

router.use(require('express').static('src/static'))


// auth login
router.get('/login', (req,res) => {
    res.render('login')
})

// auth logout
router.get('/logout', (req,res) => {
    // handle with passport
    res.render('home')
})

// auth with google
router.get('/google', (req,res) => {
    // handle with passport
    res.send('logging in with google')
})


module.exports = router