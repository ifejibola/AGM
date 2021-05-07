import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const ApplyTemplate = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Apply the selected Template
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>

                    <Card>
                        <h4>
                            You're going to clear the current meeting and apply it the following template:
                    </h4>
                    </Card>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control as="select">
                                    <option>AGM (Annual General Meeting)</option>
                                    <option>AGM (Annual General Meeting)</option>

                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>

                    <Col>
                        <Button onClick={props.onHide}>APPLY</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>CANCEL</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default ApplyTemplate