import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const ManagerTemplateActions = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Manage Template Actions
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>

                    <Col>
                        <Button onClick={props.onHide}>APPLY TEMPLATE</Button>
                    </Col>
                    <Col>
                        <Button onClick={props.onHide}>SAVE AS TEMPLATE</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default ManagerTemplateActions