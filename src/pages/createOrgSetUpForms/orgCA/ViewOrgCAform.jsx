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
                          <p>{requestResponse.name?requestResponse.name:''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.fqdn?requestResponse.fqdn:''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select RCA</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                              <p>{requestResponse.rootCA?requestResponse.rootCA:''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.serverCert?requestResponse.serverCert.substring(0,100)+"..."
                            :''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.serverKey?requestResponse.serverKey.substring(0,100)+"...":''}</p>
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
                           <p>{requestResponse.enrollId?requestResponse.enrollId:''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.enrollSecret?requestResponse.enrollSecret:''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.adminCert?requestResponse.adminCert.substring(0,100)+"...":''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.adminKey?requestResponse.adminKey.substring(0,100)+"...":''}</p>
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
                           <p>{requestResponse.ipAddress?requestResponse.ipAddress:''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Server Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.serverPort?requestResponse.serverPort:''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Operations Service Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.opServicePort?requestResponse.opServicePort:''}</p>
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
                           <p>{requestResponse.enableTLSAuth===true?'ON':'OFF'}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.tlsServerCert?requestResponse.tlsServerCert.substring(0,100)+"...":''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{requestResponse.tlsServerKey?requestResponse.tlsServerKey.substring(0,100)+"...":''}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{requestResponse.enableClientTLSAuth?'ON':'OFF'}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{requestResponse.enableOpTLSAuth?'ON':'OFF'}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                        {/* <div className="label-text"> */}
                            <label>Enable Operations Client TLS Authentication</label>
                        {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{requestResponse.enableOpClientTLSAuth?'ON':'OFF'}</p>
                        </Grid.Column>
                    </Grid.Row>
                    {
                        requestResponse.enableOpClientTLSAuth?
                        <Grid.Row>
                        <Grid.Column width={3}>
                        {/* <div className="label-text"> */}
                            <label>TLS Ops Client Root Certificate</label>
                        {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={5}>
                       <p>{requestResponse.tlsOpsRootCertId}</p>
                        </Grid.Column>
                    </Grid.Row>:''
                    }
                    
                    
                </Grid>
                
            </div>
        );
    }
}

export default ViewOrgCAform;