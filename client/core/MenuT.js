import React, { useState } from 'react';
import { connect } from 'react-redux'
import { fetch_current_user, loadStatus } from '../actions'
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     UncontrolledDropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     NavbarText
// } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import { Container, Button, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap'

// import { extend } from 'lodash';

class MenuT extends React.Component {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);
    // const auth = this.props.isAuthenticated;
    // componentDidMount() {
    //     this.props.loadStatus()
    // }
    render() {

        const { isAuthenticated } = this.props.auth
        console.log('ISAUTHENTICATED: ', isAuthenticated)

        // if isAuth show logout, else show sign and singup
        const authButton2 = isAuthenticated ? (
            <Nav.Link href="/api/logout">Logout</Nav.Link>
        ) : (
            <div>
                <Nav className="mr-auto">

                    <Nav.Link href="/signup">Signup</Nav.Link>
                    <Nav.Link href="/signin">Login</Nav.Link>
                </Nav>
            </div>
        )
        return (
            <Navbar bg="dark" variant="dark">
                <Link to="/" className="brand-logo">
                    {/* <Navbar.Brand >AGMEETING</Navbar.Brand> */}
                </Link>
                <Navbar.Brand href="/">AGMEETING</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/users">Users</Nav.Link>
                    {authButton2}
                </Nav>

            </Navbar>
        )
    }


}
// function mapStateToProps({ auth }) {
//     return { auth };
// }

const mapStateToProps = state => ({
    auth: state.auth,
})

// pull in state from auth reducer
// function loadData(store) {

//     store.dispatch(loadStatus())

// }


export default connect(mapStateToProps)(MenuT)