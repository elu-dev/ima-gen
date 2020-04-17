const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2')

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
        done(null, {id: profile.id, name: profile.displayName})
    })
)