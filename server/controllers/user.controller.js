// import User from '../models/User.model'
import { User } from '../../models/user'
import { Moderator } from '../../models/moderator'
import db from '../../models';
import sequelize from 'sequelize'
import extend from 'lodash/extend'
import request from 'request'


const create = async (req, res) => {


    // console.log(user.toJSON());
    const us = { email: req.body.email, password: req.body.password, name: req.body.name, is_admin: req.body.is_admin }
    // Validate request
    // if (!req.body.title) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }
    // user.create(us).then(data => {
    //     res.send(data);
    // })        

    const user = await db.User.create(req.body, {
        include: [
            db.Moderator,
        ]
    })

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