import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const GeneralSettings = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    General Settings
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form>
                        <Row>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Row>
                                    <Form.Label>Event Name</Form.Label>
                                    <Form.Control type="email" placeholder="BOD TEST 2" />

                                </Row>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Meeting Chair</Form.Label>
                                    <Form.Control as="select">
                                        <option>NCRA Mod</option>
                                        <option>NCRA Mod</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Row>
                                        <Form.Label>Place</Form.Label>
                                        <Form.Control type="email" size="sm" placeholder="OttawaBodTest2" />

                                    </Row>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1" size="sm">
                                    <Row>
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control type="email" placeholder="2016" />

                                    </Row>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label> Number of Comments per User</Form.Label>
                                    <Form.Control as="select">
                                        <option>2 Comments</option>
                                        <option>4 Comments</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Maximum Number of FOR</Form.Label>
                                    <Form.Control as="select">
                                        <option>3 Comments</option>
                                        <option>4 Comments</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label> Time for each Comment</Form.Label>
                                    <Form.Control as="select">
                                        <option>2 Minutes</option>
                                        <option>4 Minutes</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Maximum Number of AGAINST</Form.Label>
                                    <Form.Control as="select">
                                        <option>3 Comments</option>
                                        <option>4 Comments</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label> Number of Times per User per Item</Form.Label>
                                    <Form.Control as="select">
                                        <option>2 Comments per Item</option>
                                        <option>4 Comments per Item</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Time for the Voting Session</Form.Label>
                                    <Form.Control as="select">
                                        <option>3 Minutes</option>
                                        <option>4 Minutes</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label> Maximum Time for Comment Session</Form.Label>
                                    <Form.Control as="select">
                                        <option>2 Minutes</option>
                                        <option>4 Minutes</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>% of Participants to Call for a Vote</Form.Label>
                                    <Form.Control as="select">
                                        <option>50% Participants</option>
                                        <option>40% Participants</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Notificaiton Time</Form.Label>
                                    <Form.Control as="select">
                                        <option>5 Second</option>
                                        <option>4 Second</option>

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
                        <Button onClick={props.onHide}>SAVE CHANGES</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default GeneralSettings