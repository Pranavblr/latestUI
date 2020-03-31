import React, { Component } from 'react';
import { Grid, Card, Button, Select, Tab } from '@scuf/common';
import {connect} from 'react-redux';

import {navigateBetweenFormType} from '../../../actions/orgSetUpMultipartFormNavigation';
import exportIcon from '../../../assets/images/orgSetup/export.svg';
import editIcon from '../../../assets/images/orgSetup/edit.svg';
import {getOrgOrdererById,exportOrgOrderer} from '../../../actions/OrgSetUp/orgConfiguration/orgOrderer';
import Loader from '../../../components/Shared/Loader/Loader';

class ViewOrdererForm extends Component {
    navigateBetweenForms = formType =>{
        this.props.setCurrentHomePage(formType);
        this.props.navigateBetweenFormType(formType);
     }
     handleOrderselectiOnChange = (Id)=>{
        this.props.getOrgOrdererById(Id);
     }
     handleClickExportOrgOrderer = (response)=>{
          this.props.exportOrgOrderer(response)
     }
    render() {
        var ordererList = [];
        let ordererDetails = this.props.ordererDetails&&
        this.props.ordererDetails.currentOrgDetails[0].orderers&&this.props.ordererDetails.currentOrgDetails[0].orderers.length>0?
        this.props.ordererDetails.currentOrgDetails[0].orderers:null;
        if(ordererDetails!==null){
           ordererDetails.map((orderer)=>{
            ordererList.push({text:orderer.name,value:orderer._id})
           })
        } 

        console.log('response-view-orderer-form',this.props.response)
        let response = this.props.response;
        return (
            <div>
                {
                    this.props.getOrderbyIdLoading?
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
                        {/* <hr class="horizontal-line" /> */}
                        <Grid.Column width={3}>
                            <Select 
                            className="view-form-select"
                            placeholder="Select a State" defaultValue={ordererList&&ordererList.length>0?
                                ordererList[0].value:0} options={ordererList}
                                onChange={(value) => this.handleOrderselectiOnChange(value)} />
                        </Grid.Column>
                        <Grid.Column width={1} className="icon-div">
                            <span className="icons">
                                <img src={editIcon} alt="" />
                            </span>

                        </Grid.Column>
                        <Grid.Column width={1} className="icon-div">

                            <span className="icons" onClick={() => this.handleClickExportOrgOrderer(response)}>
                                <img src={exportIcon} alt="" />
                            </span>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Button type="primary" className="add-orderer" content="ADD ORDERER" 
                                            onClick={()=>this.props.handleClickAddOrderer('orgOrderer')} />
                        </Grid.Column>
                        </Grid.Row>
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
                        <p>{response.serverCert?response.serverCert.substring(0, 100):null}</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Key</label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <p>{response.serverKey?response.serverKey.substring(0, 100):null}</p>
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
                        <p>{response.ipAddress?response.ipAddress:''}</p>
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
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export const mapStateToProps = state=>{
    return {
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType,
        getOrderbyIdLoading:state.orgOrderer.getOrderbyIdLoading,
        ordererDetails:state.orgMSP
    }
}

export default connect(mapStateToProps,{navigateBetweenFormType,getOrgOrdererById,exportOrgOrderer})(ViewOrdererForm);