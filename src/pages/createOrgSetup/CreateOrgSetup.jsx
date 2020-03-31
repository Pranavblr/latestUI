import React, { Component } from 'react';
import { Grid, Card, Button, Header } from '@scuf/common';
import { connect } from 'react-redux';

import {getCAList} from '../../actions/OrgSetUp/orgCA';

import './CreateOrgSetup.css';
import Loader from '../../components/Shared/Loader/Loader';
import CreateOrgSetUpForms from '../../pages/createOrgSetUpForms/CreateOrgSetUpForms';

const UserProfile = Header.UserProfile;
class CreateOrgSetup extends Component {
    componentDidMount(){
        this.props.getCAList();
    }
    handleClickRedirectToForm = () => {
        this.props.history.push('/create-form-org-setup');
     }
    handlClickDashboard = () => {
        window.location.href = '/dashboard';
        // this.props.history.push('/dashboard');   
    }
    extractTheFirstName = ()=>{
        let currentUserName = this.props.firstName?this.props.firstName:localStorage.getItem('firstName');
        let SplittedName = currentUserName?currentUserName.split(" "):[];
        return SplittedName.length>0?SplittedName[0].charAt(0).toUpperCase():"";
      }
      extractTheLastName = ()=>{
        let currentUserName = this.props.lastName?this.props.lastName:localStorage.getItem('LastName');
        let SplittedName = currentUserName?currentUserName.split(" "):[];
        return SplittedName.length>0?SplittedName[0][0].toUpperCase():"";
      }
    render() {
        
        return (
            <div>
                {this.props.caListLoading?
                <Loader/>:''}
                {
                  this.props.caList&&this.props.caList.length===0?
                  <React.Fragment>
                       <Grid className="create-org-setup">
                    <Grid.Row>
                        <Header menu={false}
                            title="TrustFlow"
                            collapseAtBreakpoint="xs"
                        >
                            <UserProfile firstName={this.extractTheFirstName()} lastName={this.extractTheLastName()} role="Demolitions">
                                <UserProfile.Item active={true}>Active Item</UserProfile.Item>
                                <UserProfile.Item active={true}
                                >Manage Roles</UserProfile.Item>
                                <UserProfile.Item onClick={() => alert("Log Out")}>
                                    Log Out
                            </UserProfile.Item>
                            </UserProfile>
                        </Header>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <h4>{this.props.orgName ? this.props.orgName.toUpperCase() : (localStorage.getItem('current-orgName') ? localStorage.getItem('current-orgName').toUpperCase() : '')}</h4>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column >
                            <p className="home-redirection" onClick={() => this.handlClickDashboard()}>&#x2190; Home</p>
                        </Grid.Column>
                    </Grid.Row>


                    <Grid.Row>
                        <Grid.Column width={3}>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Card className="card">
                                <Card.Header title="No Org setup available" />
                                <Card.Content>
                                    Click on the button below to create <br />
                                    <p className="second-line"><span>the Org setup.</span></p>
                                    <div className="button-section">
                                        <Button type="primary" content="CREATE"
                                            onClick={() => { this.handleClickRedirectToForm() }} />
                                    </div>
                                </Card.Content>

                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                  </React.Fragment>
                  :<CreateOrgSetUpForms {...this.props}/>

                }
               
            </div>
        );
    }
}
export const mapStateToProps = state => {
    return {
        orgName: state.authenticate.currentOrgName,
        firstName: state.signUp.userDetails.firstname,
        lastName: state.signUp.userDetails.lastname,
        caListLoading:state.orgMSP.caListLoading,
        caList:state.orgMSP.caList
    }
}

export default connect(mapStateToProps,{getCAList})(CreateOrgSetup);