import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Redirect } from 'react-router';
import { registerUser } from "../actions";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap'

class Signup extends React.Component {

    state = {
        email: '',
        password: '',
        name: '',
        company: '',
        msg: null
    }

    // static propTypes = {
    //     isAuthenticated: PropTypes.bool,
    //     error: PropTypes.object.isRequired
    // }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitForm = e => {
        e.preventDefault();

        const { email, password, name, company } = this.state;

        const registerU = {
            email, password, name, company
        }

        console.log("this.props (in onSubmitForm: ", this.props);
        console.log()
        console.log("*** Adding user to db: ", registerU);
        console.log()
        this.props.registerUser(registerU)

    }

    componentDidMount() {
        // this.props.Login(this.state.email, this.state.password)
    }
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

                <Form.Group controlId="formBasicName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCompany">
                    <Form.Label>Company:</Form.Label>
                    <Form.Control type="text" placeholder="Enter companh" name="company" onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
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
    error: state.error
})

// pull in state from auth reducer
function loadData(store) {

}

export default {
    // loadData,
    component: connect(mapStateToProps, { registerUser })(Signup)
};