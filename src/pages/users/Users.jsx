import React, { Component } from "react";
import { connect } from "react-redux";

import {Switch,Route, Redirect} from 'react-router-dom';

import "./Users.css";
import Nav from 'react-bootstrap/Nav'
import AllAdmins from "./alladmins/AllAdmins";

class Users extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          value: 3
        };
    }
    render() {
        return(
            <div>
                <div>
                    <Nav activeKey="/users"
                    onSelect={selectedKey => console.log(`selected ${selectedKey}`)}>
                        <Nav.Item>
                            <Nav.Link href="/users/alladmins">All Admins</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="/users/networkadmins">Network Admins</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/users/appadmins">App Admins</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/users/orgadmins">Org Admins</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </div>
                <div className="users-section">
                    <Switch>
                        <Route {...this.props} path="/users/alladmins" component={AllAdmins} />
                        {/* <Route path="/mydashboard/applications" component={Applications} />
                        <Route path="/mydashboard/organisations" component={Organisations} /> */}
                        <Redirect to="/users/alladmins" />
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(Users);