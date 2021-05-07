import React from 'react'
import { renderRoutes } from 'react-router-config'
import Menu from './core/Menu'
import MenuT from './core/MenuT'
// import { fetch_current_user } from './actions'
import { fetch_current_user, loadStatus } from './actions'
// import { hot } from 'react-hot-loader'


const App = ({ route }) => {


    return <div>
        <Menu />
        {/* <MenuT /> */}
        {renderRoutes(route.routes)}

    </div>
}

// function loadData() {
//     return ({ dispatch }) => dispatch(fetch_current_user());
// }

export default {
    component: App,
    // loadData,
    loadData: ({ dispatch }) => dispatch(fetch_current_user())
}