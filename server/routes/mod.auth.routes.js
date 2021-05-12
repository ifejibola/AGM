import express from 'express'
import authCtrl from '../controllers/auth.controller'
import modCtrl from '../controllers/mod.controller'
import passport from 'passport'
import { Moderator } from '../../models'

const router = express.Router()

// router.post('/login', passport.authenticate('local', {
//     session: true,
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true,
// }), authCtrl.login)
// router.get('/login',)
router.route('/login')
    .post(authCtrl.signin)
// .get(modCtrl.read)

router.route('/logout')
    .get(authCtrl.signout)

export default router