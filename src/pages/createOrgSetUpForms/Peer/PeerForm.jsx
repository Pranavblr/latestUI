import React, { Component } from 'react';
import { Grid, Card, Button, Input, Tab,Select} from '@scuf/common';
import {connect} from 'react-redux';

import cloudUploadIcon from '../../../assets/images/orgSetup/cloud_uplod.svg';
import {navigateBetweenFormType} from '../../../actions/orgSetUpMultipartFormNavigation';
import {getUserInput,getSelectedPeerFile,
    getCouchDBdata,handleCheckBoxStatus} from '../../../actions/OrgSetUp/orgConfiguration/orgPeer';
import Loader from '../../../components/Shared/Loader/Loader';
import ErrorMessage from '../../../components/Shared/ErrorMessage/ErrorMessage';

let fileReader;
class peerForm extends Component {
    constructor(props){
     super(props);
     this.state={
        enableTLSAuth:false,
        enableClientTLSAuth:false,
        enableOpTLSAuth:false,
        enableOpClientTLSAuth:false,
        stateDB:false
     }
    }
    navigateBetweenForms = formType =>{
       this.props.setCurrentHomePage(formType);
       this.props.navigateBetweenFormType(formType);
    }
    fetchUserInputs=(key,value)=>{
        let inputObject = {
            key:key,
            value:value
        }
        this.props.getUserInput(inputObject);
    }
    getOrgPeerSelectedFile=(key,file)=>{
        fileReader = new FileReader();
        fileReader.onloadend = ()=>{
            var content = fileReader.result;
            
            console.log('file-content',content);
            var inputFileDetails = {
                key:key,
                value:fileReader.result
            }
           this.props.getSelectedPeerFile(inputFileDetails);
             
        }
       fileReader.readAsText(file);
    }
    getOrgPeerCouchDBdata = (key,value)=>{
        let inputObject = {
            key:key,
            value:value
        }
        this.props.getCouchDBdata(inputObject);
    }
    handleClickCheckBoxStatus = (key)=>{
        if(key==='enableTLSAuth'){
          this.setState({
            enableTLSAuth:!this.state.enableTLSAuth
          },function(){
            this.props.handleCheckBoxStatus(
                {
                    key:'enableTLSAuth',
                    value:this.state.enableTLSAuth
                }
            )
          })
        }else if(key==='enableClientTLSAuth'){
            this.setState({
                enableClientTLSAuth:!this.state.enableClientTLSAuth
              },function(){
               this.props.handleCheckBoxStatus(
                {
                    key:'enableClientTLSAuth',
                    value:this.state.enableClientTLSAuth
                }
               )
              }
              )
        }else if(key==='enableOpTLSAuth'){
            this.setState({
                enableOpTLSAuth:!this.state.enableOpTLSAuth
              },function(){
                this.props.handleCheckBoxStatus(
                    {
                        key:'enableOpTLSAuth',
                        value:this.state.enableOpTLSAuth
                    }
                )
              })

        }else if(key==='enableOpClientTLSAuth'){
            this.setState({
                enableOpClientTLSAuth:!this.state.enableOpClientTLSAuth
              },function(){
                this.props.handleCheckBoxStatus(
                    {
                        key:'enableOpClientTLSAuth',
                        value:this.state.enableOpClientTLSAuth
                    }
                )
              })

        }else if(key==='stateDB'){
           this.setState({
            stateDB:!this.state.stateDB
           })
        }
    }
    render() {
        let caList = this.props.caList;
        var CaListOptions=[]
        if(caList&&caList.length>0){
            caList.map((ca)=>[
                CaListOptions.push({value:ca._id,text:ca.name})
            ])
        }
        return (
            <div>
                {
                    this.props.createOrgPeerLoading?
                    <Loader/>:''
                }
                {
                    this.props.createOrgPeerErrorMessage?
                    <ErrorMessage page="org-peer" title="Error" open={true}
                     message={this.props.createOrgPeerErrorMessage} />:
                    ''
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
                        </Grid.Row>
                        <Grid.Row>
                    <Grid.Column >
                        <h5>Peer Node Configuration</h5>
                    </Grid.Column>
                    </Grid.Row>
                    
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Name</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.fetchUserInputs("name",value)} className="form-input" placeholder="Peer Name" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.fetchUserInputs("fqdn",value)} className="form-input" placeholder="FQDN" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.fetchUserInputs("enrollId",value)} className="form-input" placeholder="Enroll Id" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.fetchUserInputs("enrollSecret",value)} className="form-input" placeholder="Enroll Secret" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.peerInputFields.serverCert} className="form-input" placeholder="Peer Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input9">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input 
                                onChange={(e)=>this.getOrgPeerSelectedFile('serverCert',e.target.files[0])} id="file-input9" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.peerInputFields.serverKey} className="form-input" placeholder="Peer  Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input10">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input
                                 onChange={(e)=>this.getOrgPeerSelectedFile('serverKey',e.target.files[0])} id="file-input10" type="file" />
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
                        <Grid.Column width={4}>
                            <Input value={this.props.peerInputFields.adminCert} className="form-input" placeholder="Peer Admin Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input11">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input 
                                onChange={(e)=>this.getOrgPeerSelectedFile('adminCert',e.target.files[0])}  id="file-input11" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Peer Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.peerInputFields.adminKey} className="form-input" placeholder="Peer Admin Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input12">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input 
                                onChange={(e)=>this.getOrgPeerSelectedFile('adminKey',e.target.files[0])} id="file-input12" type="file" />
                            </div>
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
                            <Input onChange={(value)=>this.fetchUserInputs("ipAddress",value)}  className="form-input" placeholder="Peer Node IP Address" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Gossip Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.fetchUserInputs("gossipPort",value)} className="form-input" placeholder="Gossip Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Eventhub Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.fetchUserInputs("eventHubPort",value)} className="form-input" placeholder="Event Hub Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Operations Service Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.fetchUserInputs("opServicePort",value)} className="form-input" placeholder="Operations Service Port" />
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
                                <input onChange={()=>this.handleClickCheckBoxStatus("enableTLSAuth")} type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    {
                        this.state.enableTLSAuth?
                        <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Server Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Select placeholder="Select CA" 
                           onChange={(value)=>this.fetchUserInputs("tlsServerRootCAId",value)}
                           defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} 
                           options={CaListOptions} />
                        </Grid.Column>
                    </Grid.Row>:''

                    }
                   <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input  value={this.props.peerInputFields.tlsServerCert} className="form-input" placeholder="TLS Server Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input21">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input 
                                onChange={(e)=>this.getOrgPeerSelectedFile('tlsServerCert',e.target.files[0])}  id="file-input21" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.peerInputFields.tlsServerKey} className="form-input" placeholder="TLS Server key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input25">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input 
                                onChange={(e)=>this.getOrgPeerSelectedFile('tlsServerKey',e.target.files[0])}  id="file-input25" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.peerInputFields.tlsClientCert} className="form-input" placeholder="TLS Client Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input13">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input 
                                onChange={(e)=>this.getOrgPeerSelectedFile('tlsClientCert',e.target.files[0])} id="file-input13" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.peerInputFields.tlsClientKey} className="form-input" placeholder="TLS Client Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input14">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input 
                                 onChange={(e)=>this.getOrgPeerSelectedFile('tlsClientKey',e.target.files[0])}  id="file-input14" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input onChange={()=>this.handleClickCheckBoxStatus("enableClientTLSAuth")} type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    {
                        this.state.enableClientTLSAuth?
                        <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Client Root CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Select placeholder="Select CA" 
                           onChange={(value)=>this.fetchUserInputs("tlsClientRootCAId",value)}
                           defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} 
                           options={CaListOptions} />
                        </Grid.Column>
                    </Grid.Row>:''

                    }
                   
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input onChange={()=>this.handleClickCheckBoxStatus("enableOpTLSAuth")} type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    {
                        this.state.enableOpTLSAuth?
                        <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Ops Server Root Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Select placeholder="Select Root CA"
                           onChange={(value)=>this.fetchUserInputs("tlsOpsServerRootCAId",value)}
                           defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} 
                           options={CaListOptions} />
                        </Grid.Column>
                    </Grid.Row>:''

                    }
                    
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.peerInputFields.tlsOpsServerCert} className="form-input" placeholder="TLS Ops Server Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input15">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input 
                                onChange={(e)=>this.getOrgPeerSelectedFile('tlsOpsServerCert',e.target.files[0])}  id="file-input15" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input  value={this.props.peerInputFields.tlsOpsServerKey} className="form-input" placeholder="TLS Ops Server Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input16">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input
                                 onChange={(e)=>this.getOrgPeerSelectedFile('tlsOpsServerKey',e.target.files[0])}  id="file-input16" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input onChange={()=>this.handleClickCheckBoxStatus("enableOpClientTLSAuth")} type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    {
                        this.state.enableOpClientTLSAuth?
                        <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Client Root Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Select placeholder="Select CA" 
                           onChange={(value)=>this.fetchUserInputs("tlsOpsClientRootCAId",value)}
                           defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} 
                           options={CaListOptions} />
                        </Grid.Column>
                    </Grid.Row>:''

                    }
                   
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
                                    <input type="checkbox" 
                                    onChange = {()=>this.handleClickCheckBoxStatus('stateDB')}
                                    className="checkbox" />
                                    <div className="knobs">
                                        <span></span>
                                    </div>
                                    <div className="layer"></div>
                                </div>

                            </Grid.Column>
                        </Grid.Row>
                        {
                            this.state.stateDB?
                            <>
                            <Grid.Row>
                            <Grid.Column width={3}>
                                <label>CouchDB Name</label>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Input
                                 onChange={(value)=>this.getOrgPeerCouchDBdata('name',value)}
                                 className="form-input" placeholder="CouchDB Name" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <label>CouchDB FQDN</label>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Input 
                                onChange={(value)=>this.getOrgPeerCouchDBdata('fqdn',value)}
                                className="form-input" placeholder="CouchDB FQDN" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <label>CouchDB Port</label>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Input
                                onChange={(value)=>this.getOrgPeerCouchDBdata('port',value)} 
                                className="form-input" placeholder="CouchDB Port" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <label>CouchDB User</label>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Input 
                                onChange={(value)=>this.getOrgPeerCouchDBdata('dbUser',value)} 
                                className="form-input" placeholder="CouchDB User" />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <label>Couch DB Password</label>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Input 
                                onChange={(value)=>this.getOrgPeerCouchDBdata('dbPassword',value)} 
                                className="form-input" placeholder="CouchDB Password" />
                            </Grid.Column>
                        </Grid.Row></>:''
                        }
                     
                    <Grid.Row className="buttons">
                        <Grid.Column width={2}>
                            <Button
                                className={`view-top-icons ${this.props.currentFormType <= 0 ? 'disabled' : ''}`}
                                type="secondary" content="BACK" onClick={() =>
                                    this.props.handleClickBack()
                                } />
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Button
                                className="view-top-icons"
                                type="primary" content="SAVE" onClick={() => this.props.handleClickSave()} />
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export const mapStateToProps = state=>{
    console.log('peer-form-input-details',state.orgPeer.peerInputDetails)
    return {
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType,
        caList:state.orgMSP.caList,
        createOrgPeerErrorMessage:state.orgPeer.createOrgPeerErrorMessage,
        peerInputFields:state.orgPeer.peerInputDetails,
        createOrgPeerLoading:state.orgPeer.createOrgPeerLoading
    }
}
export default connect(mapStateToProps,{navigateBetweenFormType,
    getUserInput,getSelectedPeerFile,handleCheckBoxStatus,getCouchDBdata})(peerForm);