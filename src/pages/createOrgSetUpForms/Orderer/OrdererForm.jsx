import React, { Component } from 'react';
import { Grid, Card, Button, Input, Radio } from '@scuf/common';

class OrdererForm extends Component {
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
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Orderer Name" />
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
                            <Input className="form-input" placeholder="Orderer Enroll Id" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Orderer Enroll Secret" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Type</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Orderer Key" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Orderer Certificate" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Orderer Key" />
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
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Orderer Admin Certificate" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Admin Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Orderer Admin Enroll Id" />
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
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Orderer Node IP Address" />
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
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
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
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input className="form-input" placeholder="Operations Service Port" />
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
                </Grid>
            </div>
        );
    }
}

export default OrdererForm;