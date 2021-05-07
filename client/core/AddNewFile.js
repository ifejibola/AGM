import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const AddNewFile = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New File
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form>
                        <Row>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Row>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="" />

                                </Row>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Item</Form.Label>
                                    <Form.Control as="select">
                                        <option>Minutes of past meeting</option>
                                        <option>Minutes of past meeting</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>

                    <Col>
                        <Button onClick={props.onHide}>Cancel</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>SAVE</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default AddNewFile