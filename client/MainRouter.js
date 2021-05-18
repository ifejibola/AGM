import App from './App'
import Menu from './core/Menu'
import MenuT from './core/MenuT'
import Home from './core/Home'
import HomeT from './core/Home2'
import UsersList from './core/UsersList';
import LoginPage from './auth/Login';
import Signup from './auth/signup'
import Socket from './auth/Socket'

import Dashboard from './Components/Dashboard/Dashboard'
import Pricing from './core/Pricing'

import NotFoundPage from './Components/NotFoundPage'
export default [

    {
        ...App,
        routes: [
            {
                path: '/',
                ...Home,
                exact: true
            },
            {
                ...UsersList,
                path: '/users'
            },
            {
                ...Socket,
                path: '/socket'
            },
            {
                ...LoginPage,
                path: '/signin'
            },
            {
                ...Signup,
                path: '/signup'
            },
            {
                ...Pricing,
                path: '/price'
            },
            {
                ...NotFoundPage,
            }

        ]

    }
]
