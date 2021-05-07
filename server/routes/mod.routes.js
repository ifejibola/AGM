import express from 'express'
import modCtrl from '../controllers/mod.controller'
import auth from '../controllers/auth.controller'
const router = express.Router()

router.route('/mod/')
    .post(modCtrl.create)

// router.get('/user', modCtrl.list)
router.route('/user')
    .get(modCtrl.list)

// router.param('userId', modCtrl.read)
router.get('/current_user', modCtrl.currentUser)
router.get('/read', modCtrl.read)

// router.get('/:userId', modCtrl.profile)

export default router