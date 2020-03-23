import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Card } from '@scuf/common';
import { Header } from "@scuf/common";
import { Link } from 'react-router-dom'

import "./NetworkApplicationDetails.css";

const UserProfile = Header.UserProfile;

class NetworkApplicationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const {
          } = this.state;
        return(
            <section className="page-content">
                <Header
                    title="TrustFlow"
                    collapseAtBreakpoint="xs"
                    onMenuToggle={() => { }}
                >
                    <UserProfile firstName="TrustFlow" lastName="User" role="Demolitions">
                        <UserProfile.Item active={true}>Active Item</UserProfile.Item>
                        <UserProfile.Item onClick={() => alert("Log Out")}></UserProfile.Item>
                    </UserProfile>
                </Header>
                <Grid>
                    <Grid.Row>
                        <span className="page-title">GoDirect Trade</span>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row>
                        <Link to="/mydashboard/allchannels">
                            <span className="back-button">Home</span>
                        </Link>
                    </Grid.Row>
                </Grid>
                <Grid className="charts-grid">
                    <Grid.Row>
                        <Grid.Column width={6}>
                          <Card >
                                <Card.Header>
                                    <p className="card-title">Title</p>
                                </Card.Header>
                                <Card.Content>
                                    <p><span className="card-content">Unable to load the chart</span></p>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={6}>
                          <Card >
                                <Card.Header>
                                    <p className="card-title">Transaction Timeline</p>
                                </Card.Header>
                                <Card.Content>
                                    <p><span className="card-content">Unable to load the chart</span></p>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Card>
                                <Card.Header>
                                    <p className="card-title">Logs</p>
                                </Card.Header>
                                <table className="logs-table">
                                    <tr>
                                        <th>Components</th>
                                        <th>Message</th>
                                        <th>Timestamp</th>
                                    </tr>
                                    <tr>
                                        <td>Peer1.hongdt.blockchain.honeywell.com</td>
                                        <td>[trusttrace] Got Error & SERVICE_UNAVAILABLE</td>
                                        <td>Thu Nov 23 08:21:31 2019</td>
                                    </tr>
                                    <tr>
                                        <td>Peer1.hongdt.blockchain.honeywell.com</td>
                                        <td>[trusttrace] Got Error & SERVICE_UNAVAILABLE</td>
                                        <td>Thu Nov 23 08:21:31 2019</td>
                                    </tr>
                                    <tr>
                                        <td>Peer1.hongdt.blockchain.honeywell.com</td>
                                        <td>[trusttrace] Got Error & SERVICE_UNAVAILABLE</td>
                                        <td>Thu Nov 23 08:21:31 2019</td>
                                    </tr>
                                    <tr>
                                        <td>Peer1.hongdt.blockchain.honeywell.com</td>
                                        <td>[trusttrace] Got Error & SERVICE_UNAVAILABLE</td>
                                        <td>Thu Nov 23 08:21:31 2019</td>
                                    </tr>
                                </table>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Card>
                                <Card.Header>
                                    <p className="card-title">Transactions</p>
                                </Card.Header>
                                <table className="logs-table">
                                    <tr>
                                        <th>Txid</th>
                                        <th>Timestamp</th>
                                        <th>Chaincode</th>
                                        <th>Version</th>
                                        <th>Message</th>
                                        <th>TxnType</th>
                                        <th>Creator MSP</th>
                                        <th>Endorser MSP</th>
                                    </tr>
                                    <tr>
                                        <td>380cacf5ed92b</td>
                                        <td>Thu Dec 7 22:23:44 2019</td>
                                        <td>trusttrace</td>
                                        <td>1.0</td>
                                        <td>Provenance...</td>
                                        <td>ENDORSER...</td>
                                        <td>hongdtMSP</td>
                                        <td>hongdtMSP, ecube...</td>
                                    </tr>
                                    <tr>
                                        <td>380cacf5ed92b</td>
                                        <td>Thu Dec 7 22:23:44 2019</td>
                                        <td>trusttrace</td>
                                        <td>1.0</td>
                                        <td>Provenance...</td>
                                        <td>ENDORSER...</td>
                                        <td>hongdtMSP</td>
                                        <td>hongdtMSP, ecube...</td>
                                    </tr>
                                    <tr>
                                        <td>380cacf5ed92b</td>
                                        <td>Thu Dec 7 22:23:44 2019</td>
                                        <td>trusttrace</td>
                                        <td>1.0</td>
                                        <td>Provenance...</td>
                                        <td>ENDORSER...</td>
                                        <td>hongdtMSP</td>
                                        <td>hongdtMSP, ecube...</td>
                                    </tr>
                                    <tr>
                                        <td>380cacf5ed92b</td>
                                        <td>Thu Dec 7 22:23:44 2019</td>
                                        <td>trusttrace</td>
                                        <td>1.0</td>
                                        <td>Provenance...</td>
                                        <td>ENDORSER...</td>
                                        <td>hongdtMSP</td>
                                        <td>hongdtMSP, ecube...</td>
                                    </tr>
                                </table>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </section>
        )
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(NetworkApplicationDetails);