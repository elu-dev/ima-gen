const router = require('express').Router()
const passport = require('passport')

router.use(require('express').static('src/views/static'))


// auth logout
router.get('/logout', (req,res) => {
    req.logout()
    res.redirect('/')
})

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}))

module.exports = router