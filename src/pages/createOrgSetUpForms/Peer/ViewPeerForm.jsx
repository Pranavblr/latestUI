import React, { Component } from 'react';
import { Grid, Card, Button, Input, Radio } from '@scuf/common';

class ViewPeerForm extends Component {
    render() {
        return (
            <div>
                <Grid className="form-grid">
                  <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>Peer Node Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Name</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                             <p>Peer1-Org1</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Peer1-Org1.blockchain.Honeywell.com</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <p>**********</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>000000</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Key Value</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>Peer Admin  Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <p>Certificate Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>Key Name</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>IP/Port Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Node IP Address</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>192.168.1.2</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Gossip Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <p>7051</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Eventhub Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>7053</p>
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
                    <Grid.Column width={6}>
                        <h5>DB Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        {/* <Grid.Row> */}
                            <Grid.Column width={3}>
                                <label>StateDB</label>
                            </Grid.Column>
                            <Grid.Column width={5}>
                            <p>ON</p>

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB Name</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>couchdb1</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>couchdb1.blokchain.Honeywell.com</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>5984</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB User</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>5984</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ViewPeerForm;