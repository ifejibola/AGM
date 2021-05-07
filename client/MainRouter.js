import App from './App'
import Menu from './core/Menu'
import MenuT from './core/MenuT'
import Home from './core/Home'
import UsersList from './core/UsersList';
import LoginPage from './auth/Login';
import Signup from './auth/signup'
import Socket from './auth/Socket'
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
            }
        ]

    }
]
