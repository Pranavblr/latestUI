import React, { Component } from 'react';
import { Grid, Card, Button, Input, Radio } from '@scuf/common';

class ViewOrdererForm extends Component {
    render() {
        return (
            <div>
                <Grid className="form-grid">
                   <Grid.Row>
                        <Grid.Column width={6}>
                            <h5>Orderer Node Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Name</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>Orderer1-org1</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Peer-org1.blockchain.Honeywell.com</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>*****</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>00000</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Type</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>Key Value</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <h5>Orderer Admin Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Admin Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>Orderer1orgadmin</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Admin Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>*********</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <h5>IP/Port Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Node IP Address</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>192.168.1.2</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Operations Service Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>7443</p>
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
                        <p>ON</p>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Server Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>None</p>
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
                            <label>TLS Server key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                             <p>Key value</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Key value</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>ON</p>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Client Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>None</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>ON</p>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Ops Server Root Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>None</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                         <p>Key Value</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>ON</p>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Client Root Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>None</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ViewOrdererForm;