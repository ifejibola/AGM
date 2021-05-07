import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const SelectVotingMode = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Select Voting Mode
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col>
                            Quick
                        </Col>

                        <Col>
                            STANDARD
                        </Col>

                        <Col>
                            OPEN
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            SETTIME
                        </Col>

                        <Col>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Control as="select">
                                    <option>1 Minute</option>
                                    <option>1 Minute</option>

                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Check
                            type="checkbox"
                            id="checkbox"
                            label="Candidate Voting"
                        />
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Vote</Form.Label>
                            <Form.Control as="select">
                                <option>3</option>
                                <option>6</option>

                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Out of</Form.Label>

                            <Form.Control as="select">
                                <option>6</option>
                                <option>6</option>

                            </Form.Control>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Label>Candidate Names</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="Jo" />
                            </Col>

                            <Col>
                                <Form.Control type="text" placeholder="Jane" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="John" />
                            </Col>

                            <Col>
                                <Form.Control type="text" placeholder="Jerry" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Control type="text" placeholder="Jeff" />

                            </Col>
                            <Col>
                                <Form.Control type="text" placeholder="NONE" />
                            </Col>
                        </Row>
                    </Row>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Col>
                        <Button onClick={props.onHide}>ACCEPT</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default SelectVotingMode