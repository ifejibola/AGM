import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown, Table } from 'react-bootstrap'

const AgendaItemsManagement = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Agenda Items Management
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col>
                            <Button>Add New Item</Button>
                            <Button>Attach File</Button>
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col>
                            <Form.Check
                                disabled
                                type="radio"
                                id="radio"
                            />
                        </Col> */}
                        <Col>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        {/* <th>#</th> */}
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        {/* <th>Meeting Status</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> <Form.Check
                                            disabled
                                            type="radio"
                                            id="radio"
                                        /></td>
                                        <td>Call to Order</td>
                                        <td>Closed</td>
                                        {/* <td><Button>Presentation In Progress</Button></td> */}
                                    </tr>
                                    <tr>
                                        <td> <Form.Check
                                            disabled
                                            type="radio"
                                            id="radio"
                                        /></td>
                                        <td>Roll Call</td>
                                        <td>closed</td>
                                        {/* <td><Button>Presentation In Progress</Button></td> */}
                                    </tr>
                                    <tr>
                                        <td> <Form.Check
                                            disabled
                                            type="radio"
                                            id="radio"
                                        /></td>
                                        <td>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            {/* <td><Button>Presentation In Progress</Button></td> */}
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Meeting Status</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Button>Presentation In Progress</Button></td>
                                        <Button>Stand by for Motion</Button><br />
                                        <Button>Stand by for Second</Button>
                                        <Button>Under Discussion</Button><br />
                                        <Button>Call for Vote</Button>
                                        <Button>Vote</Button><br />
                                        <Button>Closed</Button>

                                    </tr>
                                </tbody>
                            </Table>

                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            {/* <Modal.Footer>
                <Row>

                    <Col>
                        <Button onClick={props.onHide}>Cancel</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>SAVE</Button>
                    </Col>
                </Row>
            </Modal.Footer> */}
        </Modal >
    );
}

export default AgendaItemsManagement