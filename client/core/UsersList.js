import { stat } from 'fs';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetch_users } from '../actions'

class UsersList extends React.Component {


    componentDidMount() {
        this.props.fetch_users();
    }

    renderUsers() {

        // const ulist = ["John", "Zeus"]
        // return ulist.map(user => {
        //     return <li key={user}>{user}</li>
        // })
        return this.props.users.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }


    render() {
        return (
            <div>
                Heres a list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    console.log('Loading some data..')

    //Manual dispatch
    return store.dispatch(fetch_users());
}
export default {
    loadData: loadData,
    component: connect(mapStateToProps, { fetch_users })(UsersList)
};