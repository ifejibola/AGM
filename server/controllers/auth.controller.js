import { Moderator } from '../../models'
import config from './../../config/devConfig'
import passport from 'passport'


const login = async (req, res) => {
    try {
        const foundUser = await Moderator.findOne({ where: { email: req.body.email } });

        if (!foundUser)
            return res.status('401').json({
                error: "User not found"
            })

        if (!req.body.email || !req.body.password) {
            return res.status('401').send({
                error: "Email and password don't match."
            })
        }

        console.log('login route: ', req.user)
    } catch (err) {
        return res.status(401).json({ error: "Could not sign in" })
    }
}
const signin = async (req, res, next) => {
    try {
        const foundUser = await Moderator.findOne({ where: { email: req.body.email } });

        if (!foundUser)
            return res.status('401').json({
                error: "User not found"
            })

        if (!req.body.email || !req.body.password) {
            return res.status('401').send({
                error: "Email and password don't match."
            })
        }

        const user = req.body;
        console.log('signin: ', user)
        // passport.authenticate('local-login', function (err, user, info) {
        //     if (err) return res.redirect("/");
        //     if (!user) return res.redirect('/');

        //     else {
        //         req.login(user, function (err) {
        //             if (err) return next(err);
        //             console.log("Request Login supossedly successful.");
        //             return res.redirect('/');
        //         });
        //     }
        // })(req, res);
        // passport.authenticate('local', {
        //     session: true,
        //     successRedirect: '/',
        //     failureRedirect: '/login',
        //     failureFlash: true,
        // })
        // req.login(user, function (err, user) {

        //     console.log(user)
        //     if (err) { return next(err) }
        // })
        passport.authenticate('local', function (err, user, info) {
            console.log('passport: ', user)
            req.login(user, function (err) {
                if (err) { return next(err); }
                return res.redirect('/' + user);
            });
        })(req, res);

        console.log('login route: ', req.user)
    } catch (err) {
        return res.status(401).json({ error: "Could not sign in" })
    }
}

const signout = (req, res) => {

    req.logout();
    res.redirect('/');
}

export default {
    login,
    signin,
    signout,
}