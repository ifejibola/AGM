import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const ManageMeetingMaintenance = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Manage Meeting Maintenance
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>

                    <Col>
                        <Button onClick={props.onHide}>RESET MEETING</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>CLEAR MEETING</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default ManageMeetingMaintenance