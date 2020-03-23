import React, { Component } from 'react';
import { Grid, Card, Button, Header } from '@scuf/common';

import './CreateOrgSetup.css';

const UserProfile = Header.UserProfile;
class CreateOrgSetup extends Component {
    handleClickRedirectToForm = ()=>{
        this.props.history.push('/create-form-org-setup');
    }
    render() {
        return (
            <div>
                <Grid className="create-org-setup">
                    <Grid.Row>
                        <Header
                            title="TrustFlow"
                            collapseAtBreakpoint="xs"
                        >
                            <UserProfile firstName="H" lastName="W" role="Demolitions">
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
                                        onClick={()=>{this.handleClickRedirectToForm()}} />
                                    </div>
                                </Card.Content>

                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default CreateOrgSetup;