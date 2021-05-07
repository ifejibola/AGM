import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Container, Button, Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap'

// import { Button } from 'reactstrap'

const Menu = ({ auth }) => {


  console.log('My auth status is: ', auth);
  console.log('object', auth.isAuthenticated)
  // console.log('object', this.props.auth.isAuthenticated)

  const authButton2 = auth ? (
    <Nav.Link href="/api/logout">Logout</Nav.Link>
  ) : (
    <div>
      <Nav className="mr-auto">

        <Nav.Link href="/signup">Signup</Nav.Link>
        <Nav.Link href="/signin">Login</Nav.Link>
      </Nav>
    </div>
  )
  return <div>
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
    <br />
  </div>
}



// function mapStateToProps({ auth }) {
//   return { auth };
// }

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(Menu);