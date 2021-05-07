import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown, Table } from 'react-bootstrap'

const IntroApprovalOfCharVoting = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Intro and approval of the Chair Voting Session
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <p>Voiting on: Intro and approval </p>
                    </Row>
                    <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Candidate Name</th>
                                    <th>Vote</th>
                                    <th>Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Jo</td>
                                    <td>0</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jane</td>
                                    <td>1</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">John</td>
                                    <td>1</td>
                                    <td>100%</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Col>
                        <Button onClick={props.onHide}>SHARE</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>CLOSE VOTE</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default IntroApprovalOfCharVoting