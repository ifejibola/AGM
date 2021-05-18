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


import Dashboard from '../Components/Dashboard/Dashboard'
const Home = () => {


    return (
        <div>
            <Dashboard />
        </div>
    );
}
export default {
    component: Home
}