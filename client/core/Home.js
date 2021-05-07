import React, { useState, useEffect } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Table } from 'reactstrap';
import classnames from 'classnames';

import { List } from 'reactstrap';
// import { Table } from 'reactstrap';
import { Image } from 'react-bootstrap'

import Interactions from './InteractionButton'
import UserTab from './UserTab'
import GeneralSettings from './GeneralSettings'
import RollCall from './RollCall'
import settingIcon from '../assets/settings.gif'
import settingIcon2 from '../assets/settings2.png'

import AddNewItem from './AddNewItemModal'
import AddNewFile from './AddNewFile'
import ManagerTemplateActions from './ManagerTemplateActions'
import ApplyTemplate from './ApplyTemplate'
import SaveCurrentMeeting from './SaveCurrentMeeting'
import ManageMeetingMaintenance from './ManageMeeting'
import ConfirmationRequest from './ConfirmationRequest'
import AgendaItemsManagement from './AgendaItemsManagement'
import AddAdminNotes from './AddAdminNotes'
import ReadyToVoteStat from './ReadytoVoteStat'
import SelectVotingMode from './SelectVotingMode'
import IntroApprovalOfCharVoting from './IntroAprrovalChair'
const Home = () => {

    const [modalShow, setModalShow] = useState(false);
    const [userTab, setUserTab] = useState(false);
    const [generalSettings, setGeneralSettings] = useState(false);
    const [rollCall, setRollCall] = useState(false);
    const [addNewItem, setAddNewItem] = useState(false);
    const [addNewFile, setNewFile] = useState(false);
    const [manageAction, setMangerAction] = useState(false);
    const [applyTemplate, setApplyTemplate] = useState(false);
    const [saveCurrentMeeting, setSaveCurrentMeeting] = useState(false);
    const [manageMeetingMaintenance, setManageMeetingMaintenance] = useState(false);
    const [confirmationRequest, setConfirmationRequest] = useState(false);
    const [agendaItemsManagement, setAgendaItemsManagement] = useState(false);
    const [addAddminNotes, setAddAdminNotes] = useState(false);
    const [readyToVoteStat, setReadyToVoteStat] = useState(false);
    const [selectVotingMode, setSelectVotingMode] = useState(false);
    const [introApprovalOfCharVoting, setIntroApprovalOfCharVoting] = useState(false);


    const [activeTab, setActiveTab] = useState('1');
    const helloElment = React.createElement(
        'h1',
        { className: 'greeting' },
        'Hello, world!'
    );


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <br>
            </br>

            <Button variant="primary" onClick={() => setModalShow(true)}>
                Interactions
         </Button>

            <Interactions show={modalShow} onHide={() => setModalShow(false)} />
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Session
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Agenda
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Vault
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        Users
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() => { toggle('5'); }}
                    >
                        Stats
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '6' })}
                        onClick={() => { toggle('6'); }}
                    >
                        Admin
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <List type="unstyled">
                                <ul>
                                    <li>Phasellus iaculis neque</li>
                                    <li>Purus sodales ultricies</li>
                                    <li>Vestibulum laoreet porttitor sem</li>
                                    <li>Ac tristique libero volutpat at</li>
                                </ul>
                                <li>Lorem ipsum dolor sit amet Consectetur adipiscing elit</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit
                                    <br>
                                    </br>
                                    <br></br>
                                    <ul>
                                        <li>Phasellus iaculis neque</li>
                                        <li>Purus sodales ultricies</li>
                                        <li>Vestibulum laoreet porttitor sem</li>
                                        <li>Ac tristique libero volutpat at</li>
                                    </ul>
                                    <ul>
                                        <li>Phasellus iaculis neque</li>
                                        <li>Purus sodales ultricies</li>
                                        <li>Vestibulum laoreet porttitor sem</li>
                                        <li>Ac tristique libero volutpat at</li>
                                    </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Aenean sit amet erat nunc</li>
                                <li>Eget porttitor lorem</li>
                            </List>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <br></br>
                    <Button style={{ float: 'right' }} outline color="secondary">Add</Button>{' '}
                    <br></br>
                    <br></br>
                    <Row>
                        <Col>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        {/* <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col> */}
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <br></br>
                    <Button style={{ float: 'right' }} outline color="secondary">Add</Button>{' '}
                    <br></br>
                    <br></br>
                    <Row>
                        <Col>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        {/* <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col> */}
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                        <Col>

                            {/* <Button style={{ float: 'right' }} outline color="secondary"></Button>{' '} */}
                            <Button style={{ float: 'right' }} outline color="secondary" onClick={() => setGeneralSettings(true)}>Settings</Button>{' '}
                            <GeneralSettings show={generalSettings} onHide={() => setGeneralSettings(false)} />
                            {/* <Image src={settingIcon} fluid /> */}
                            <Button style={{ float: 'right' }} outline color="secondary" onClick={() => setRollCall(true)}>Roll Call</Button>{' '}
                            <RollCall show={rollCall} onHide={() => setRollCall(false)} />
                            <Button style={{ float: 'right' }} outline color="secondary">Ready to Vote Statistics</Button>{' '}
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setUserTab(true)}>Content and Messages</Button>{' '}

                            <UserTab show={userTab} onHide={() => setUserTab(false)} />
                            {/* <Button>Ready to Vote Statistics</Button>
                        <Button>Content and Messages</Button>
                            {/* <Button></Button>
                    <Button></Button> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary">TEMPLATES</Button>{' '}
                            <Button style={{ float: 'right' }} outline color="secondary">MAINTENANCE</Button>{' '}

                        </Col>
                    </Row>

                </TabPane>
                <TabPane tabId="6">
                    <Row>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary">TEMPLATES</Button>{' '}
                            <Button style={{ float: 'right' }} outline color="secondary">MAINTENANCE</Button>{' '}

                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setAddNewItem(true)}>Add New Item</Button>{' '}
                            <AddNewItem show={addNewItem} onHide={() => setAddNewItem(false)} />
                        </Col>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setNewFile(true)}>Add New File</Button>{' '}
                            <AddNewFile show={addNewFile} onHide={() => setNewFile(false)} />
                        </Col>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setMangerAction(true)}>Manage Template Actions</Button>{' '}
                            <ManagerTemplateActions show={manageAction} onHide={() => setMangerAction(false)} />
                        </Col>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setApplyTemplate(true)}>Apply Template</Button>{' '}
                            <ApplyTemplate show={applyTemplate} onHide={() => setApplyTemplate(false)} />
                        </Col>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setSaveCurrentMeeting(true)}>Save Current Meeting as Template</Button>{' '}
                            <SaveCurrentMeeting show={saveCurrentMeeting} onHide={() => setSaveCurrentMeeting(false)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setManageMeetingMaintenance(true)}>Manage Meeting Maintenance</Button>{' '}
                            <ManageMeetingMaintenance show={manageMeetingMaintenance} onHide={() => setManageMeetingMaintenance(false)} />
                        </Col>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setConfirmationRequest(true)}>Confirmation Request</Button>{' '}
                            <ConfirmationRequest show={confirmationRequest} onHide={() => setConfirmationRequest(false)} />
                        </Col>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setAgendaItemsManagement(true)}>Agenda Items Management</Button>{' '}
                            <AgendaItemsManagement show={agendaItemsManagement} onHide={() => setAgendaItemsManagement(false)} />
                        </Col>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setAddAdminNotes(true)}>Add Admin Notes</Button>{' '}
                            <AddAdminNotes show={addAddminNotes} onHide={() => setAddAdminNotes(false)} />
                        </Col>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setReadyToVoteStat(true)}>Ready To Vote Stat</Button>{' '}
                            <ReadyToVoteStat show={readyToVoteStat} onHide={() => setReadyToVoteStat(false)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setSelectVotingMode(true)}>Select Voting Mode</Button>{' '}
                            <SelectVotingMode show={selectVotingMode} onHide={() => setSelectVotingMode(false)} />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Button style={{ float: 'right' }} outline color="secondary" variant="primary" onClick={() => setIntroApprovalOfCharVoting(true)}>Intro | Approval of Chair</Button>{' '}
                            <IntroApprovalOfCharVoting show={introApprovalOfCharVoting} onHide={() => setIntroApprovalOfCharVoting(false)} />
                        </Col>

                    </Row>

                </TabPane>
            </TabContent>
        </div>
    );
}
export default {
    component: Home
}