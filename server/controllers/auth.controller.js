import { Moderator } from '../../models'
import config from './../../config/devConfig'
import passport from 'passport'



const signout = (req, res) => {

    req.logout();
    res.redirect('/');
}

export default {
    signout,
}