import React, { Component, useState, useEffect } from 'react';

import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { Login } from '../actions'

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, Modal, Container, Row, Col } from 'react-bootstrap'


function Content_Messages(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Content and Messages Generator
          </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col>
                            Item: Approval of Agenda
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
                    <Row>
                        <Col>
                            Request Comment
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Comment FOR
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Comment AGAINST

                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Withdraw Comment
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Anytime Buttons
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Point of Information
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Point of Privilege
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Point of Order
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Recess
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Table
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Amend
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Button>
                            Ready To Vote
                        </Button>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Vote YES
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Vote NO
                            </Button>
                        </Col>
                        <Col xs={6} md={4}>
                            <Button variant="primary">
                                Abstain
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
                    <Button>Attachement</Button>
                </Col>
                <Col>
                    <Button onClick={props.onHide}>POST MESSAGE</Button>
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

export default Content_Messages