import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Redirect } from 'react-router';
import { registerUser } from "../actions";
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Alert } from 'react-bootstrap'
import { returnErrors } from '../actions'
// import { GET_ERRORS } from '../constants/actionTypes'
class Signup extends React.Component {

    state = {
        email: '',
        password: '',
        name: '',
        company: '',
        msg: null
    }

    static propTypes = {
        // isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        // register: PropTypes.func.isRequired,
    }

    // componentDidUpdate(prevProps) {
    //     const { error } = this.props;

    //     //check if anything has changed
    //     if (error !== prevProps.error) {
    //         // check for register error
    //         if (error.id === 'REGISTER_FAIL') {
    //             this.setState({ msg: error.msg })
    //         } else {
    //             this.setState({ msg: null });
    //         }
    //     }
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
        //attempt to register
        this.props.registerUser(registerU)
        const { error } = this.props;

        console.log('error: ', error.msg)
        console.log('error: ', error.id)
        console.log('error: ', error)
        if (error) {
            // check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg })
            } else {
                this.setState({ msg: null });
            }
        }

    }

    componentDidMount() {
        const { error } = this.props;

        console.log('error: ', error)
        // //check if anything has changed
        // if (error) {
        //     // check for register error
        //     if (error.id === 'REGISTER_FAIL') {
        //         this.setState({ msg: error.msg })
        //     } else {
        //         this.setState({ msg: null });
        //     }
        // }

    }

    render() {
        return (
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
            </div>
        );

    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

// pull in state from auth reducer
function loadData(store) {
    console.log('Loading some data..')

    //Manual dispatch
    return store.dispatch(returnErrors());
}
export default {
    // loadData,
    component: connect(mapStateToProps, { registerUser })(Signup)
};