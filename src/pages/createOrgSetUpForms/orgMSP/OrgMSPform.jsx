import React, { Component } from 'react';
import { Grid, Card, Tab, Input,Select,Button} from '@scuf/common';
import {connect} from  'react-redux';

import ErrorMessage from '../../../components/Shared/ErrorMessage/ErrorMessage';
import Loader from '../../../components/Shared/Loader/Loader';
import cloudUploadIcon from '../../../assets/images/orgSetup/cloud_uplod.svg';

import {getUserInputs,getSelectedCAcertificate,getSelectedMSPFile} from '../../../actions/OrgSetUp/orgMSP';
import {navigateBetweenFormType} from '../../../actions/orgSetUpMultipartFormNavigation';

let fileReader;
class OrgMSPform extends Component {
    getUserInput = (key,value)=>{
        let InputObject = {
            key:key,
            value:value
        }
        this.props.getUserInputs(InputObject)
    }
    getSelectedCa = (key,value)=>{
        var inputFileDetails = {
            key:key,
            value:value
        }
       this.props.getSelectedCAcertificate(inputFileDetails)
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
        this.props.getSelectedMSPFile(inputFileDetails);
             
        }
       fileReader.readAsText(file);
    }
    navigateBetweenForms = (formType)=>{
      this.props.setCurrentHomePage(formType);
      this.props.navigateBetweenFormType(formType);
    }
    render() {
        
        let orgName = localStorage.getItem('current-orgName');
        let mspId=orgName+'MSP';
        let caList = this.props.caList;
        var newCAlist=[];
        if(caList&&caList.length>0){
          for(var i=0;i<caList.length;i++){
            let newObject={
               value:caList[i]._id,
               text:caList[i].name
            }
            newCAlist.push(newObject);
          }
        }
        return (
            <div>
                <Grid className="form-grid">
                    {
                        this.props.errorResponse?
                        <ErrorMessage page="org-MSP" open={true} message={this.props.errorResponse}
                        title="Error"/>:''
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
                        <h5>Org MSP Configuration Parameters</h5>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>MSP Id</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input className="form-input disabled" placeholder={mspId}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Select CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           {/* <Input className="form-input" placeholder="Admin Key"/> */}
                           <Select 
                           placeholder="Select a State" 
                           defaultValue={newCAlist&&newCAlist.length>0?newCAlist[0].value:''}
                        //    value={this.props.mspInputDeatils.ca}
                            options={newCAlist} onChange={(value)=> this.getSelectedCa("ca",value)}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input onChange={(value)=>this.getUserInput("enrollId",value)} className="form-input" placeholder="Enroll Id"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input onChange={(value)=>this.getUserInput("enrollSecret",value)} className="form-input" placeholder="Enroll Secret"/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input   value={this.props.mspInputDeatils.adminCert} className="form-input" placeholder="Admin Certificate"/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input8">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                                   <input
                                     onChange={(e)=>this.getOrgSelectedFile("adminCert",e.target.files[0])}
                                     id="file-input8" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Org  Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Input  value={this.props.mspInputDeatils.adminKey} className="form-input" placeholder="Admin Key"/>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input7">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>

                                <input onChange={(e)=>this.getOrgSelectedFile("adminKey",e.target.files[0])} id="file-input7" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                           <label>Select TLS CA Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           {/* <Input className="form-input" placeholder="Admin Key"/> */}
                           <Select 
                           placeholder="Select CA" 
                           defaultValue={newCAlist&&newCAlist.length>0?newCAlist[0].value:''}
                        //    value={this.props.mspInputDeatils.ca}
                            options={newCAlist} onChange={(value)=> this.getSelectedCa("tlsCA",value)}/>
                        </Grid.Column>
                    </Grid.Row>
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
    console.log('msp input details',state.orgMSP.mspInputDetails);
    return {
        errorResponse:state.orgMSP.errorResponse,
        loading:state.orgMSP.loading,
        caList:state.orgMSP.caList,
        mspInputDeatils:state.orgMSP.mspInputDetails,
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType,
    }
}
export default connect(mapStateToProps,{getUserInputs,getSelectedCAcertificate,
    navigateBetweenFormType,getSelectedMSPFile})(OrgMSPform);