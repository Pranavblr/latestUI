import React, { Component } from 'react';
import { Grid, Card, Button, Input } from '@scuf/common';

import {connect} from  'react-redux';
class ViewMSPform extends Component {
    render() {
        return (
            <div>
                <Grid className="form-grid">
                <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>Org MSP Configuration Parameters</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>MSP Id</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Org1Msp</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Select Intermediate CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>None</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Select Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>*********</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Key Value</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ViewMSPform;