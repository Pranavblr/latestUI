import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import { Grid, Card } from '@scuf/common';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav'
import AllAdmins from '../Request Sent/AllAdmins/AllAdmins';


class RequestSent extends Component {
    render() {
        return (
            <Container fluid={true}>
                <div>
                <Nav activeKey="/request-sent/alladmins">
                        <Nav.Item>
                            <Nav.Link href="/request-sent/alladmins">All Admins</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="#">Network Admins</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">App Admins</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#">org Admins</Nav.Link>
                        </Nav.Item> */}
                </Nav>
               </div>
               <div className="request-recieved-conatiner">
                <Switch>
                    <Route path="/request-sent/alladmins" component={AllAdmins}></Route>
                    
                    <Redirect to="/request-sent/alladmins"></Redirect>
                </Switch>
              </div>
               
            </Container>
        );
    }
}

export default RequestSent;