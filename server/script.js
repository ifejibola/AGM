import 'babel-polyfill'
import express from 'express'
import compress from 'compression'
import cors from 'cors'
import proxy from 'express-http-proxy';
import helmet from 'helmet'

import passport from 'passport';
import flash from 'express-flash'
import session from 'express-session'
import cookieParser from 'cookie-parser'


import Moderator from '../models/moderator'
import userRoutes from './routes/user.routes'
import modRoutes from './routes/mod.routes'
import modAuth from './routes/mod.auth.routes'
import db from '../models';
//SSR
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes, matchRoutes } from 'react-router-config'

//Sockets
import { createServer } from 'http'
import { Server } from 'socket.io'
// const { Server } = require("socket.io")
//Redux server side setup
import createStore from './helpers/createStore'
import renderer from './helpers/renderer'

//Front end routes
import MainRouter from '../client/MainRouter'

//config
import devConfig from '../config/devConfig'

import '../models/moderator';
import '../config/passport';

//Express
const server = express()

//Socket.io
const httpServ = createServer(server);
const io = new Server(httpServ);
io.on('connection', (socket) => {
    console.log('a user connected')

    console.log(`connect: ${socket.id}`);

    socket.on('hello!', () => {
        console.log(`hello from ${socket.id}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
        console.log(`disconnect: ${socket.id}`);

    })
})
// io.listen(8081);

setInterval(() => {
    io.emit('message', new Date().toISOString());
}, 1000);
server.use(
    '/api',
    proxy('localhost:8080', {
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = 'localhost:8080';
            return opts;
        }
    })
);

server.use(express.json());
server.use(cookieParser())
server.use(compress())
// secure apps by setting various HTTP headers
// server.use(helmet())
// enable CORS - Cross Origin Resource Sharing
server.use(cors())
//Encrypt cookie, and set it to a day long
server.use(express.urlencoded({ extended: false }))
server.use(flash())
server.use(session({ secret: 'agmeeting', resave: false, saveUninitialized: false }))
//initialize passport
server.use(passport.initialize());
server.use(passport.session())

server.use((req, res, next) => {
    console.log(" ")
    console.log('session: ', req.session)
    console.log(" ")
    console.log('cookie: ', req.cookies)
    console.log(" ")

    if (req.isAuthenticated()) {
        console.log("req.user: ", req.user);
        console.log('req.isAuth: ', req.isAuthenticated())
        console.log("CURRENT_USER.name: ", JSON.stringify(req.user.name));
    }
    else {
        console.log('req.isAuth false: ', req.isAuthenticated())
        console.log("CURRENT-USER: ", JSON.stringify(req.user));
    }
    next();
})
//make folder public/availble 
server.use(express.static('public'))


server.use('/', userRoutes)
server.use('/', modRoutes)
server.use('/', modAuth)



server.get('*', (req, res, next) => {
    //Redux
    const store = createStore(req);

    // Call dataLoad function within the routes // using destructuring route object 
    // will return an array of promises, representing all the pending network request from all the action creators

    // console.log('promises[matchRoutes]: ', promises)

    const promises = matchRoutes(MainRouter, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });
    // console.log('promises[matchRoutes]: ', promises)

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        // console.log('context: ', context)
        if (context.url) {
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }

        res.send(content);
    });
});


server.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ "error": err.name + ": " + err.message })
    } else if (err) {
        res.status(400).json({ "error": err.name + ": " + err.message })
        console.log(err)
    }
})
// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {

    console.log("Drop and re-sync db..")
    httpServ.listen(devConfig.port, () => {
        console.log(`Listening on port: ${devConfig.port}`);
    })
})
