const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const crypto = require('crypto')

passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})

passport.use(
    new GoogleStrategy({
        callbackURL:'/profile',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        const _id = parseInt(crypto.createHash('md5').update(profile.id).digest('hex').substr(5,13), 16) & 0x7FFFFFFF
        done(null, {id: _id, name: profile.displayName})
    })
)