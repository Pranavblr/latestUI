import React, { Component } from 'react';
import { Grid, Card, Button, Input, Radio } from '@scuf/common';

import cloudUploadIcon from '../../../assets/images/orgSetup/cloud_uplod.svg';

class peerForm extends Component {
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
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Peer Name" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="FQDN" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="PeerEnroll Id" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="PeerEnroll Id" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Peer Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input  id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Peer Admin Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input  id="file-input" type="file" />
                            </div>
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
                            <Input className="form-input" placeholder="Peer Admin Enroll Id" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Peer Admin Enroll Secret" />
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
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Peer Node IP Address" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Gossip Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Gossip Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Eventhub Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Event Hub Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Operations Service Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
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
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Server Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input  id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input  id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input  id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input  id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Client Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Ops Server Root Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input  id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input  id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Client Root Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
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
                            <Grid.Column width={4}>
                                <div className="button b2" id="button-18">
                                    <input type="checkbox" className="checkbox" />
                                    <div className="knobs">
                                        <span></span>
                                    </div>
                                    <div className="layer"></div>
                                </div>

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB Name</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="CouchDB Name" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="CouchDB FQDN" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="CouchDB Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB User</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="CouchDB User" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default peerForm;