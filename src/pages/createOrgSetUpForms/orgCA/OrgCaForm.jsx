import React, { Component } from 'react';
import { Grid, Input, Select,Button,Tab} from '@scuf/common';
import { connect } from 'react-redux';

import ErrorMessage from '../../../components/Shared/ErrorMessage/ErrorMessage';
import Loader from '../../../components/Shared/Loader/Loader';
import cloudUploadIcon from '../../../assets/images/orgSetup/cloud_uplod.svg';

import {getUserInput,getUserSelectedFile,getSelectedCheckBoxStatus} from '../../../actions/OrgSetUp/orgCA';
import {navigateBetweenFormType} from '../../../actions/orgSetUpMultipartFormNavigation';

let fileReader;
class OrgCaForm extends Component {
    constructor(props){
        super(props);
        this.state={
            enableTLS:false,
            enableClientTLSAuth:false,
            enableOpTLSAuth:false,
            enableOpClientTLSAuth:false
        }
    }
    handleChangeCheckBox = (key,event) => {
        if(key==='enableTLSAuth'&&event.target.value==='on'){
            this.setState({
                enableTLS:!this.state.enableTLS
            },function(){
                let enableTLS = this.state.enableTLS;
             this.props.getSelectedCheckBoxStatus(
                 {key:'enableTLSAuth',value:enableTLS}
             )
            });
        }
        else if(key==='enableClientTLSAuth'&&event.target.value==='on'){
            this.setState({
                enableClientTLSAuth:!this.state.enableClientTLSAuth
            },function(){
                let enableClientTLSAuth = this.state.enableClientTLSAuth;
                this.props.getSelectedCheckBoxStatus(
                    {key:'enableClientTLSAuth',value:enableClientTLSAuth}
                )
            });
        }else if(key==='enableOpTLSAuth'&&event.target.value==='on'){
            this.setState({
                enableOpTLSAuth:!this.state.enableOpTLSAuth
            },function(){
                let enableOpTLSAuth = this.state.enableOpTLSAuth;
                this.props.getSelectedCheckBoxStatus(
                    {key:'enableOpTLSAuth',value:enableOpTLSAuth}
                )
            });
        }else if(key==='enableOpClientTLSAuth'&&event.target.value==='on'){
            this.setState({
                enableOpClientTLSAuth:!this.state.enableOpClientTLSAuth
            },function(){
                let enableOpClientTLSAuth = this.state.enableOpClientTLSAuth;
                this.props.getSelectedCheckBoxStatus(
                    {key:'enableOpClientTLSAuth',value:enableOpClientTLSAuth}
                )
            });
        }
    }
    getOrgSelectedFile=(key,file)=>{
        fileReader = new FileReader();
        fileReader.onloadend = ()=>{
            var content = fileReader.result;
            
            console.log('file-content',content);
            var inputFileDetails = {
                key:key,
                value:fileReader.result
            }
           this.props.getUserSelectedFile(inputFileDetails);
             
        }
       fileReader.readAsText(file);
    }
    readFileData (fileData){
        this.props.getUserSelectedFile(fileData);
    }
    getOrgCAInput = (key,value)=>{
        let inputObject ={
            key:key,
            value:value
        }
        this.props.getUserInput(inputObject);
    }
    navigateBetweenForms = (formType)=>{
        // this.props.navigateBetweenForms(formType);
        this.props.navigateBetweenFormType(formType);
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
                <Grid className="form-grid">
                    {
                        this.props.errorResponse?
                        <ErrorMessage page="orgCA-page" open={true} message={ this.props.errorResponse} title="Error"/>:''
                    }
                    {
                        this.props.loading?
                        <Loader/>:''
                    }
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
                        <Grid.Column>
                            <h5>CA Node Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            {/* <div className="label-text"> */}
                            <label>CA Name</label>
                            {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.getOrgCAInput("name",value)} className="form-input" placeholder="CA Name" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.getOrgCAInput("fqdn",value)} className="form-input" placeholder="FQDN" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select RCA</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Select placeholder="Select RCA" defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} options={CaListOptions} onChange = {(value)=>this.getOrgCAInput("rootCA",value)}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.CAInputDeatils.serverCert} className="form-input" placeholder="CA Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input onChange={(e)=>this.getOrgSelectedFile("serverCert",e.target.files[0])} id="file-input" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.CAInputDeatils.serverKey} className="form-input" placeholder="CA Key" />
                            {/* <p><Button type="secondary" content="Generate" /></p> */}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input1">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                                 <input onChange={(e)=>this.getOrgSelectedFile("serverKey",e.target.files[0])} id="file-input1" type="file" />
                            </div>
                        </Grid.Column> 
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>

                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button type="secondary" className="generate-button" content="Generate" />
                        </Grid.Column>
                        <hr/>
                    </Grid.Row>
                   
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <h5>CA Admin Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.getOrgCAInput("enrollId",value)} className="form-input" placeholder="Enroll Id" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.getOrgCAInput("enrollSecret",value)} className="form-input" placeholder="Enroll Secret" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input  value={this.props.CAInputDeatils.adminCert} className="form-input" placeholder="CA Admin Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input2">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                                 <input onChange={(e)=>this.getOrgSelectedFile("adminCert",e.target.files[0])} id="file-input2" type="file" />
                            </div>
                        </Grid.Column> 
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.CAInputDeatils.adminKey}  className="form-input" placeholder="CA Admin Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input3">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                                 <input onChange={(e)=>this.getOrgSelectedFile("adminKey",e.target.files[0])}  id="file-input3" type="file" />
                            </div>
                        </Grid.Column> 
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>

                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button type="secondary" className="generate-button" content="Generate" />
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
                        <Grid.Column width={4}>
                            <Input  onChange={(value)=>this.getOrgCAInput("ipAddress",value)} className="form-input" placeholder="CA Server IP Address" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Server Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.getOrgCAInput("serverPort",value)}  className="form-input" placeholder="CA Server Port" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Operations Service Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.getOrgCAInput("opServicePort",value)} className="form-input" placeholder="Operations Service Port" />
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
                                <input type="checkbox" onChange={(event) => this.handleChangeCheckBox("enableTLSAuth",event)} className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    {
                        this.state.enableTLS?
                        <React.Fragment>
                        <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.CAInputDeatils.tlsServerCert}  className="form-input" placeholder="TLS Server Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input4">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                                 <input onChange={(e)=>this.getOrgSelectedFile("tlsServerCert",e.target.files[0])}  id="file-input4" type="file" />
                            </div>
                        </Grid.Column> 
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.CAInputDeatils.tlsServerKey}  className="form-input" placeholder="TLS Server Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input5">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                                 <input onChange={(e)=>this.getOrgSelectedFile("tlsServerKey",e.target.files[0])}  id="file-input5" type="file" />
                            </div>
                        </Grid.Column> 
                    </Grid.Row>
                    </React.Fragment>:''

                    }
                    
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input 
                                onChange={(event) => this.handleChangeCheckBox("enableClientTLSAuth",event)} type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input
                                 onChange={(event) => this.handleChangeCheckBox("enableOpTLSAuth",event)}  type="checkbox" className="checkbox" />
                                <div className="knobs">
                                    <span></span>
                                </div>
                                <div className="layer"></div>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            {/* <div className="label-text"> */}
                            <label>Enable Operations Client TLS Authentication</label>
                            {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input 
                                onChange={(event) => this.handleChangeCheckBox("enableOpClientTLSAuth",event)}
                                type="checkbox"  className="checkbox" />
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
                           <Select placeholder="Select TLS Certificate" defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} options={CaListOptions} onChange = {(value)=>this.getOrgCAInput("tlsOpsRootCertId",value)}/>
                        </Grid.Column>
                    </Grid.Row>:''

                    }
                    

                </Grid>
            </div>
        );
    }
}
export const mapStateToProps = state => {
    console.log('orgCA-user input',state.orgCA.CAinputDetails);
    console.log('org-ca-list',state.orgMSP.caList);
    return {
        loading:state.orgCA.loading,
        errorResponse:state.orgCA.errorResponse,
        CAInputDeatils:state.orgCA.CAinputDetails,
        caList:state.orgMSP.caList,
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType,
    }
}
export default connect(mapStateToProps, {getUserInput,getUserSelectedFile,
    getSelectedCheckBoxStatus,navigateBetweenFormType})(OrgCaForm);