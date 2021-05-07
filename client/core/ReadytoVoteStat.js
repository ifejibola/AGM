import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const ReadyToVoteStat = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ready to Vote Statistics
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <h4>Participants Ready to Vote on: </h4>
                    </Row>
                    <Row>
                        <Card>
                            <Row>
                                <Col>
                                    READY : 0%
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    NOT READY : (39)100%
                                </Col>
                            </Row>
                        </Card>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>

                    <Col>
                        <Button onClick={props.onHide}>SHARE</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>MOVE TO VOTE</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default ReadyToVoteStat