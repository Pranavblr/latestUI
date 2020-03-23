import React, { Component } from 'react';
import { Grid, Input, Select } from '@scuf/common';

import {connect} from  'react-redux';

class ViewOrgCAform extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let requestResponse = this.props.response;
        console.log('view-ca-form-response', requestResponse);
        return (
            <div>
                <Grid className="form-grid">
                    <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>CA Node Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            {/* <div className="label-text"> */}
                            <label>CA Name</label>
                            {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <p>{requestResponse.name}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.fqdn}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select RCA</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                              <p>{requestResponse.rootCA}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>Certficate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>Key Value</p>
                        </Grid.Column>
                    </Grid.Row>
                    {/* <hr/> */}
                    <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>CA Admin Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.enrollId}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.enrollSecret}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Key Value</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>IP/Port Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Server IP Address</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.ipAddress}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Server Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.serverPort}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Operations Service Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.opServicePort}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>TLS Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.enableTLSAuth}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Key Value</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.enableClientTLSAuth}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{requestResponse.enableOpTLSAuth}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                        {/* <div className="label-text"> */}
                            <label>Enable Operations Client TLS Authentication</label>
                        {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{requestResponse.enableOpClientTLSAuth}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                        {/* <div className="label-text"> */}
                            <label>TLS Ops Client Root Certificate</label>
                        {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>ON</p>
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
                
            </div>
        );
    }
}

export default ViewOrgCAform;