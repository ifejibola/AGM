// import User from '../models/User.model'
import { User } from '../../models/'
import { Moderator } from '../../models/moderator'
import db from '../../models';
import sequelize from 'sequelize'

const create = async (req, res) => {


    // console.log(user.toJSON());
    const us = { email: req.body.email, password: req.body.password, name: req.body.name }

    const usr = req.body;
    console.log('usr: ', usr)

    console.log('req.user.id: ', req.user.id)
    const id = req.user.id
    const user = await User.create({
        email: usr.email,
        password: usr.password,
        moderatorId: id
    })

    // console.log('modUser: ', user)

    // save user to db
    try {
        await user.save();
        console.log(`${user.email} was added to the db`);
        return res.status(200).json({
            message: "Successfully signed up!!"
        })
    } catch (err) {
        return res.status(400).console.log(err);
    }
}

const list = async (req, res) => {

    try {
        const users = await db.User.findAll({ limit: 10 }).then((user) => {
            console.log(JSON.stringify(user));
        })
        res.json(users)
    } catch (err) {
        return res.status(400).console.log(err);
    }
}


export default {
    create,
    list
}