import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col } from 'react-bootstrap'


function AnytimeButtonNotif(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Anytime Buttons Notification
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col>
                            Luke (Part) NCRA : Request a Recess
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                            <Button variant="primary">
                                Motion Item
                            </Button>
                        </Col>

                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Second Item
                            </Button>
                        </Col>
                    </Row>


                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Col>
                    <Button>Message Destination</Button>
                </Col>
                <Col>
                    <Button onClick={props.onHide}>SEND MESSAGE</Button>
                </Col>
            </Modal.Footer>
        </Modal>
    );
}

// function App() {
//     const [modalShow, setModalShow] = useState(false);

//     return (
//         <>
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//                 Launch modal with grid
//         </Button>

//             <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
//         </>
//     );
// }

export default AnytimeButtonNotif