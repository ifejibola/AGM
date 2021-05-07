import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col, Card, DropdownButton, Dropdown } from 'react-bootstrap'

const AddAdminNotes = (props) => {

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Admin Notes
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Form>
                        <Row>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Row>
                                    <h3>Patrick (Part) NCRA commented</h3>
                                    <Card>
                                        I believe Smith should be the moderator because he has good experience in doing it last year and did a good job
                                    </Card>
                                </Row>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <textarea>
                                        Patrick thought that Smith did a very good job last year as the
                                        meeting went quickly and hopes it would be similar this year.
                                    </textarea>
                                </Form.Group>
                            </Col>
                        </Row>

                    </Form>

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Row>
                    <Col>
                        <Button onClick={props.onHide}>ADD NOTES</Button>
                    </Col>
                </Row>
            </Modal.Footer>
        </Modal>
    );
}

export default AddAdminNotes