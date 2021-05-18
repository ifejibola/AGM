import React from 'react'
import { renderRoutes } from 'react-router-config'
import Menu from './core/Menu'
import MenuT from './core/MenuT'
import Menu2 from './core/Menu2'
// import { fetch_current_user } from './actions'
import { fetch_current_user, loadStatus } from './actions'
// import { hot } from 'react-hot-loader'


const App = ({ route }) => {

    return <div>
        {/* <Menu2 /> */}
        <Menu />
        {/* <MenuT /> */}
        {renderRoutes(route.routes)}
    </div>
}

export default {
    component: App,
    // loadData,
    loadData: ({ dispatch }) => dispatch(fetch_current_user())
}