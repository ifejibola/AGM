import { stat } from 'fs';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetch_users } from '../actions'
import requireAuth from '../Components/hoc/requireAuth'
import { modUser } from '../actions'

import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Alert } from 'react-bootstrap'

class UsersList extends React.Component {


    componentDidMount() {
        this.props.fetch_users();
    }

    state = {
        email: '',
        password: '',
        msg: null
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitForm = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const registerU = {
            email, password,
        }

        console.log("this.props (in onSubmitForm: ", this.props);
        console.log()
        console.log("*** Adding user to db: ", registerU);
        console.log()
        //attempt to register
        this.props.modUser(registerU)
        const { error } = this.props;

        // console.log('error: ', error.msg)
        // console.log('error: ', error.id)
        // console.log('error: ', error)
        if (error) {
            // check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg })
            } else {
                this.setState({ msg: null });
            }
        }

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

                <br>
                </br>

                <h2>Add User: </h2>

                <div>
                    {this.state.msg ? <Alert variant="danger">{this.state.msg}</Alert> : null}
                    <Form onSubmit={this.onSubmitForm}>
                        {this.state.msg ? <Alert variant="danger">{this.state.msg}</Alert> : null}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit
                </Button>
                    </Form>
                </div>
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
    component: connect(mapStateToProps, { fetch_users, modUser })(requireAuth(UsersList))
};