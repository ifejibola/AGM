import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const ConfirmationRequest = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Confirmation Request
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <h5>
                            You're about to
                        </h5>
                    </Row>
                    <Row>
                        <h3>
                            RESET the current Meeting
                        </h3>
                    </Row>
                    <Row>
                        <h5>
                            This action will maintain your Metting structure but clear the Log,
                            Vault and all interaction record.
                        </h5>
                    </Row>
                    <h5>

                    </h5>
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

export default ConfirmationRequest