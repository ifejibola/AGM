import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap'

class LoginPage extends React.Component {

    state = {
        email: '',
        password: '',
        msg: null
    }

    // static propTypes = {
    //     isAuthenticated: PropTypes.bool,
    // }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitForm = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const loginU = {
            email, password,
        }

        console.log("**Fron end login process starteed ****", loginU)
        console.log("this.props (in onSubmitForm: ", this.props);
        console.log()
        this.props.Login(loginU)

    }

    componentDidMount() {
        // this.props.Login(this.state.email, this.state.password)
    }
    // 
    // 
    render() {
        return (
            <Form onSubmit={this.onSubmitForm}>
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

        );

    }

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})


// pull in state from auth reducer
function loadData(store) {

    // store.dispatch(Login())

}

export default {
    // loadData,
    component: connect(mapStateToProps, { Login })(LoginPage)
};