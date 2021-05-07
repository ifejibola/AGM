import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const RollCall = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Roll Call
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form>
                        <Row>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Row>
                                    <Form.Label>Participants List</Form.Label>
                                </Row>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <h5>
                                        1. Kim
                                        <br />
                                        2. Brian
                                        <br />
                                        3. Care
                                        <br />
                                        4. Catherine
                                        <br />
                                        5. Geneevieve
                                        <br />
                                        6. Ophira[Part]
                                        <br />
                                        7. Shirly
                                        <br />
                                        8. Stephane
                                        <br />
                                        9. Tseten
                                        <br />
                                    </h5>
                                </div>
                                <h6>Quorum: 11% /Minimum: 50%</h6>
                            </Col>
                        </Row>

                    </Form>

                </Container>
            </Modal.Body>
            {/* <Modal.Footer>
                <Row>

                    <Col>
                        <Button onClick={props.onHide}>Cancel</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>SAVE CHANGES</Button>
                    </Col>
                </Row>
            </Modal.Footer> */}
        </Modal>
    );
}

export default RollCall