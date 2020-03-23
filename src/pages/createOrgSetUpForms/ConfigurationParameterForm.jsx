import React, { Component } from 'react';
import { Grid, Card, Button, Input, Radio } from '@scuf/common';

import {connect} from 'react-redux';

class ConfigurationParameterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFormType: "Peer"
        }
    }
    handleClickFormType = (formType) => {
        this.setState({
            selectedFormType: formType
        })
    }
    render() {
        return (
            <div>
                <Grid className="form-grid">
                    <Grid.Row className="config-radiotype">
                        <Grid.Column width={4}>
                            <Radio
                                label="Peer"
                                name="RadioGroup"
                                checked={this.state.selectedFormType === "Peer"}
                                onChange={() => { this.handleClickFormType("Peer") }}
                            />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Radio
                                label="Orderer"
                                name="RadioGroup"
                                checked={this.state.selectedFormType === "Orderer"}
                                onChange={() => { this.handleClickFormType("Orderer") }}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    {
                        this.state.selectedFormType === 'Peer' ?
                            <React.Fragment>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Peer Name</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Peer Name" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>FQDN</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="FQDN" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Peer Enroll Id</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="PeerEnroll Id" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Peer Certificate</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Peer Certificate" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Peer Admin Key</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Peer Admin Key" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Peer Admin Enroll Id</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Peer Admin Enroll Id" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Peer Admin Enroll Secret</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Peer Admin Enroll Secret" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Peer Node IP Address</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Peer Node IP Address" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Gossip Port</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Gossip Port" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Event Hub Port</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Event Hub Port" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Enable TLS Authentication</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
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
                                    <Grid.Column width={4}>
                                        <label>Enable Client TLS Authentication</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
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
                                    <Grid.Column width={4}>
                                        <label>Enable Operations TLS Authentication</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
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
                                    <Grid.Column width={4}>
                                        <label>Enable Operations Client TLS Authentication</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
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
                                    <Grid.Column width={4}>
                                        <label>Operations Service Port</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Operations Service Port" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>StateDB</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <div className="button b2" id="button-18">
                                            <input type="checkbox" className="checkbox" />
                                            <div className="knobs">
                                                <span></span>
                                            </div>
                                            <div className="layer"></div>
                                        </div>

                                    </Grid.Column>
                                </Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>CouchDB Name</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="CouchDB Name" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>CouchDB FQDN</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="CouchDB FQDN" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>CouchDB Port</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="CouchDB Port" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>CouchDB User</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="CouchDB User" />
                                    </Grid.Column>
                                </Grid.Row>
                            </React.Fragment> :
                            // orderer form starts
                            <React.Fragment>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Name</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Name" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>FQDN</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="FQDN" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Enroll Id</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Enroll Id" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Enroll Secret</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Enroll Secret" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Certificate</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Certificate" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Key</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Key" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Admin Certificate</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Admin Certificate" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Admin Key</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Admin Key" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Admin Enroll Id</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Admin Enroll Id" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Admin Enroll Secret</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Admin Enroll Secret" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Orderer Node IP Address</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Orderer Node IP Address" />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={4}>
                                        <label>Enable TLS Authentication</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
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
                                    <Grid.Column width={4}>
                                        <label>Enable Client TLS Authentication</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
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
                                    <Grid.Column width={4}>
                                        <label>Enable Operations TLS Authentication</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
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
                                    <Grid.Column width={4}>
                                        {/* <div className="label-text"> */}
                                        <label>Enable Operations Client TLS Authentication</label>
                                        {/* </div> */}
                                    </Grid.Column>
                                    <Grid.Column width={5}>
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
                                    <Grid.Column width={4}>
                                        <label>Operations Service Port</label>
                                    </Grid.Column>
                                    <Grid.Column width={5}>
                                        <Input className="form-input" placeholder="Operations Service Port" />
                                    </Grid.Column>
                                </Grid.Row>
                            </React.Fragment>

                    }


                </Grid>
            </div>
        );
    }
}
export const mapStateToProps = state=>{
    return state;
}

export default connect(mapStateToProps,null)(ConfigurationParameterForm);