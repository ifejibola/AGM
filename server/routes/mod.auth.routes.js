import express from 'express'
import authCtrl from '../controllers/auth.controller'
import modCtrl from '../controllers/mod.controller'
import passport from 'passport'

const router = express.Router()

router.post('/login', passport.authenticate('local', {
    session: true,
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
}))
// router.get('/login',)
// router.route('/login')
//     .post(authCtrl.signin)
// .get(modCtrl.read)

router.route('/logout')
    .get(authCtrl.signout)

export default router