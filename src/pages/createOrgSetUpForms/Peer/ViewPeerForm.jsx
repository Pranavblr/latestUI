import React, { Component } from 'react';
import { Grid, Card, Button, Input, Tab,Select} from '@scuf/common';
import {connect} from 'react-redux';

import {navigateBetweenFormType} from '../../../actions/orgSetUpMultipartFormNavigation';
import exportIcon from '../../../assets/images/orgSetup/export.svg';
import editIcon from '../../../assets/images/orgSetup/edit.svg';
import Loader from '../../../components/Shared/Loader/Loader';
import {getOrgPeerById,exportOrgPeer} from '../../../actions/OrgSetUp/orgConfiguration/orgPeer';

class ViewPeerForm extends Component {
    navigateBetweenForms = formType =>{
        this.props.setCurrentHomePage(formType);
        this.props.navigateBetweenFormType(formType);
     }
     handleClickExportOrgPeer = (response)=>{
       this.props.exportOrgPeer(response);
     }
     handlePeerselectiOnChange = (Id)=>{
       this.props.getOrgPeerById(Id);
     }
    render() {
        var peerList = [];
        let peerDetails = this.props.peerDetails&&
        this.props.peerDetails.currentOrgDetails[0].peers&&this.props.peerDetails.currentOrgDetails[0].peers.length>0?
        this.props.peerDetails.currentOrgDetails[0].peers:null;
        if(peerDetails!==null){
           peerDetails.map((peer)=>{
            peerList.push({text:peer.name,value:peer._id})
           })
        }
        let response = this.props.response;
        console.log('view-peer-form-response',response);
        return (
            <div>
                {
                    this.props.peerByIdLoading?
                    <Loader/>:''
                }
                <Grid className="form-grid">
                  <Grid.Row>
                  <Grid.Column width={5}>
                            <Tab defaultActiveIndex={0} onTabChange={(activeIndex) => this.navigateBetweenForms(activeIndex)} activeIndex={this.props.currentFormType} >
                                <Tab.Pane title="Org CA" >
                                </Tab.Pane>
                                <Tab.Pane title="Org MSP" >
                                </Tab.Pane>
                                <Tab.Pane title="Peer" >
                                </Tab.Pane>
                                <Tab.Pane title="Orderer" >
                                </Tab.Pane>
                            </Tab>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Select 
                            className="view-form-select"
                            placeholder="Select a State" defaultValue={peerList&&peerList.length>0?peerList[0].value:0} options={peerList}
                                onChange={(value) => this.handlePeerselectiOnChange(value)} />
                        </Grid.Column>
                        <Grid.Column width={1} className="icon-div">
                            <span className="icons">
                                <img src={editIcon} alt="" />
                            </span>

                        </Grid.Column>
                        <Grid.Column width={1} className="icon-div">

                            <span className="icons" onClick={() => this.handleClickExportOrgPeer(response)}>
                                <img src={exportIcon} alt="" />
                            </span>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Button type="primary" className="view-top-icons" content="ADD PEER" 
                                            onClick={()=>this.props.handleClickAddPeer('orgPeer')} />
                        </Grid.Column>
                        </Grid.Row>
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
                               <p>{response.name?response.name:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{response.fqdn?response.fqdn:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <p>{response.enrollId?response.enrollId:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{response.enrollSecret?response.enrollSecret:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{response.serverCert?response.serverCert.substring(0, 100):null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{response.serverKey?response.serverKey.substring(0, 100):null}</p>
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
                          <p>{response.adminCert?response.adminCert.substring(0, 100):null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{response.adminKey?response.adminKey.substring(0, 100):null}</p>
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
                            <p>{response.ipAddress?response.ipAddress:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Gossip Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <p>{response.gossipPort?response.gossipPort:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Eventhub Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.eventHubPort?response.eventHubPort:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Operations Service Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.opServicePort?response.opServicePort:null}</p>
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
                        <p>{response.enableTLSAuth?'ON':'OFF'}</p>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Server Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.tlsServerRootCAId?response.tlsServerRootCAId:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{response.tlsServerCert?response.tlsServerCert.substring(0, 100):null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                             <p>{response.tlsServerKey?response.tlsServerKey.substring(0, 100):null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <p>{response.tlsClientCert?response.tlsClientCert.substring(0, 100):null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                           <p>{response.tlsClientKey?response.tlsClientKey.substring(0, 100):null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <p>{response.enableClientTLSAuth?'ON':'OFF'}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Client Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.tlsClientRootCAId?response.tlsClientRootCAId:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.enableOpTLSAuth?'ON':'OFF'}</p>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Ops Server Root Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.tlsOpsServerRootCAId?response.tlsOpsServerRootCAId:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.tlsOpsServerCert?response.tlsOpsServerCert.substring(0, 100):null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                         <p>{response.tlsOpsServerKey?response.tlsOpsServerKey.substring(0, 100):null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.enableOpClientTLSAuth?'ON':'OFF'}</p>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Client Root Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.tlsOpsClientRootCAId?response.tlsOpsClientRootCAId:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={6}>
                        <h5>DB Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row> */}
                        {/* <Grid.Row> */}
                            {/* <Grid.Column width={3}>
                                <label>StateDB</label>
                            </Grid.Column>
                            <Grid.Column width={5}>
                            <p>ON</p>

                            </Grid.Column> */}
                        {/* </Grid.Row> */}
                        <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB Name</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.stateDB&&response.stateDB.name?response.stateDB.name:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.stateDB&&response.stateDB.fqdn?response.stateDB.fqdn:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB Port</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.stateDB&&response.stateDB.port?response.stateDB.port:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CouchDB User</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.stateDB&&response.stateDB.dbUser?response.stateDB.dbUser:null}</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export const mapStateToProps = state=>{
    return {
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType,
        peerDetails:state.orgMSP,
        peerByIdLoading:state.orgPeer.getPeerByIdrequestStarts
    }
}

export default connect(mapStateToProps,{navigateBetweenFormType,getOrgPeerById,exportOrgPeer})(ViewPeerForm);