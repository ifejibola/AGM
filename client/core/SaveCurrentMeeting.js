import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const SaveCurrentMeeting = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Save Current Meeting as Template
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form>
                        <Row>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Row>
                                    <Form.Label>Select a name for the template</Form.Label>
                                    <Form.Control type="text" placeholder="Template name..." />

                                </Row>
                            </Form.Group>
                        </Row>
                    </Form>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>

                    <Col>
                        <Button onClick={props.onHide}>SAVE</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>CANCEL</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default SaveCurrentMeeting