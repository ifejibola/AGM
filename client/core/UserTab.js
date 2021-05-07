import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const UserTab = (props) => {



    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Content and Messages Generator
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>Please be seated, we will start in 5 minutes</Card.Body>

                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Col>
                        <DropdownButton size="sm" id="dropdown-basic-button" variant="secondary" title="Destination">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col>
                        <Button style={{ float: 'right' }} outline color="secondary">Attachement</Button>{' '}
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>POST MESSAGE</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default UserTab