import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import {Switch,Route,Redirect} from 'react-router-dom';
import AllAdmins from './AllAdmins/AllAdmins';
import NetworkAdmins from './NetworkAdmins';
import AppAdmins from './AppAdmins';
import orgAdmins from './orgAdmins';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class RequestReceived extends Component {
    render() {
        return (
            <Container fluid={true}>
                <div>
                <Nav activeKey="/request-received/alladmins">
                        <Nav.Item>
                            <Nav.Link href="/request-received/alladmins">All Admins</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="/request-received/network-admins">Network Admins</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/request-received/app-admins">App Admins</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/request-received/org-admins">org Admins</Nav.Link>
                        </Nav.Item> */}
                </Nav>
               </div>
               <div className="request-recieved-conatiner">
                <Switch>
                    <Route path="/request-received/alladmins" component={AllAdmins}></Route>
                    <Route path="/request-received/network-admins" component={NetworkAdmins}></Route>
                    <Route path="/request-received/app-admins" component={AppAdmins}></Route>
                    <Route path="/request-received/org-admins" component={orgAdmins}></Route>
                    <Redirect to="/request-received/alladmins"></Redirect>
                </Switch>
              </div>
               
            </Container>
        );
    }
}

export default RequestReceived;