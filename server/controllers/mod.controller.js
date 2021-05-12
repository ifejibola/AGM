import { Moderator } from '../../models/'
import { User } from '../../models/'
import bcrypt from 'bcrypt'


Moderator.prototype.setPassword = function (password, mod) {
    mod.salt = crypto.randomBytes(16).toString('hex');
    mod.hash = crypto.pbkdf2Sync(password, mod.salt, 10000, 120, 'sha512').toString('hex');
};

// Moderator.beforeCreate(setPassword)
// Moderator.beforeUpdate(setPassword)


// const create = async (req, res, next) => {

//     // Moderator.User = User.belongsTo(Moderator, { as: 'user' });
//     // User.belongsTo(Moderator, { as: 'user' });
//     // Moderator.User = Moderator.hasMany(User, { as: 'user' }); // add moderatorid to User table, assessors getMod, set Mod

//     const mod = await Moderator.create(req.body, {
//         // include: [{ model: User, as: 'user' }],
//         freezeTableName: true
//     })

//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     mod.password = hashedPassword
//     console.log('hash: ' + mod.password)
//     // save user to db
//     mod.save().then(function () {
//         //    return res.redirect('/').status(200).json({ mod: mod });
//         // return res.status(200).json({ mod: mod });
//         console.log(mod)
//         return res.redirect('/');
//     }).catch(next)
//     // res.redirect('/')
// }
function apiAuthErrorResult(res, msg = 'Error') {
    res.status(302);
    res.json({
        msg
    });
}
const create = async (req, res, next) => {

    // Moderator.User = User.belongsTo(Moderator, { as: 'user' });
    // User.belongsTo(Moderator, { as: 'user' });
    // Moderator.User = Moderator.hasMany(User, { as: 'user' }); // add moderatorid to User table, assessors getMod, set Mod

    if (!req.body)
        return apiAuthErrorResult(res, 'Malformed request.');
    else {
        if (!req.body.email || !req.body.password || !req.body.name)
            return apiAuthErrorResult(res, 'Malformed request.');
    }

    // check if this user has been created
    const foundUser = await Moderator.findOne({ where: { email: req.body.email } });

    if (foundUser !== null)
        return apiAuthErrorResult(res, `A moderator with that email (${req.body.email}) already exists`);

    // save user to db
    try {
        const mod = await Moderator.create(req.body, {
            // include: [{ model: User, as: 'user' }],
            freezeTableName: true
        })

        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        mod.password = hashedPassword
        console.log('hash: ' + mod.password)
        await mod.save();
        console.log(`${mod.name} was added to the db`);
        return res.status(200).json({
            message: "Successfully signed up!!"
        })
    } catch (err) {
        return res.status(400).json({ msg: err.message });
    }
}

const read = async (req, res,) => {

    if (req.user) {
        return res.send(req.user);
    } else {
        console.log('theres nothing to read in current_user: ', req.user)
        return res.send(req.user)
    }
    // res.send(req.user)
}
const currentUser = async (req, res) => {
    // console.log("current user: req.user: ", req.user)
    // if (req.user) {
    //     console.log(`You are reading ${JSON.stringify(req.user.name)}`);
    //     return res.send(req.user)
    // } else {
    //     console.log('theres nothing to read in current_user: ', req.user)
    //     return res.send(req.user)
    // }

    const isAuthenticated = !!req.user;
    if (isAuthenticated) {
        console.log(`User is authenticated, session is ${req.session.id}`);
    } else {
        console.log("unknown user");
    }
    res.send(isAuthenticated ? true : false);
}

const auth = async (req, res) => {

}
const profile = async (req, res, next) => {
    if (req.payload) {
        await Moderator.findOne({
            where: {
                id: req.payload.id
            }
        }).then(function (user) {
            if (!user) { return res.json({ profile: 'Profile/id not found' }) }

            return res.json({ profile: req.profile.toProfileJSONFor(user) })
        });
    } else {
        return res.json({ profile: "false" });
    }
}

const list = async (req, res, next) => {

    try {
        await Moderator.findAll({ limit: 10 }).then((user) => {
            // console.log(JSON.stringify(user));
            res.json(user)
        })
    } catch (err) {
        next(err);
    }
}


export default {
    create,
    list,
    read,
    profile,
    currentUser
}