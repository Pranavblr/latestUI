import React, { Component } from 'react';
import { Grid, Input, Select,Button} from '@scuf/common';
import { connect } from 'react-redux';

import ErrorMessage from '../../../components/Shared/ErrorMessage/ErrorMessage';
import Loader from '../../../components/Shared/Loader/Loader';
import cloudUploadIcon from '../../../assets/images/orgSetup/cloud_uplod.svg';

import {getUserInput,getUserSelectedFile} from '../../../actions/OrgSetUp/orgCA';

const stateOptions = [ { value: 'AL', text: 'Alabama' }, {value: 'GA', text:'Georgia' }, {value:'HI', text:'Hawaii'} ];
let fileReader;
class OrgCaForm extends Component {
    handleChangeCheckBox = (event) => {
    }
    getOrgSelectedFile=(key,file)=>{
        fileReader = new FileReader();
        // fileReader.onloadend=this.handleReadFileEnd(key);
        fileReader.onload = ()=>{
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
    handleReadFileEnd = (key)=>{
        var inputFileDetails = {
            key:key,
            value:fileReader.result
        }
        
        this.props.getUserSelectedFile(inputFileDetails);
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
    render() {
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
                        <Grid.Column width={6}>
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
                           <Select placeholder="Select a State" options={stateOptions} onChange = {(value)=> (alert(value))}/>
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
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                                 <input onChange={(e)=>this.getOrgSelectedFile("serverKey",e.target.files[0])} id="file-input" type="file" />
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
                            <Input onChange={(value)=>this.getOrgCAInput("enrollId",value)} className="form-input" placeholder="CA Admin Certificate" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.getOrgCAInput("enrollSecret",value)} className="form-input" placeholder="CA Admin Key" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input  value={this.props.CAInputDeatils.adminCert} className="form-input" placeholder="CA Admin Enroll Id" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                                 <input onChange={(e)=>this.getOrgSelectedFile("adminCert",e.target.files[0])} id="file-input" type="file" />
                            </div>
                        </Grid.Column> 
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>CA Admin Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.CAInputDeatils.adminKey}  className="form-input" placeholder="CA Admin Secret" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                                 <input onChange={(e)=>this.getOrgSelectedFile("adminKey",e.target.files[0])}  id="file-input" type="file" />
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
                            {/* <div className="label-text"> */}
                            <label>Enable Operations Client TLS Authentication</label>
                            {/* </div> */}
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input type="checkbox" onChange={(event) => this.handleChangeCheckBox(event)} className="checkbox" />
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
                           <Select placeholder="Select a State" options={stateOptions} onChange = {(value)=> (alert(value))}/>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        );
    }
}
export const mapStateToProps = state => {
    console.log('orgCA-user input',state.orgCA.CAinputDetails);
    return {
        loading:state.orgCA.loading,
        errorResponse:state.orgCA.errorResponse,
        CAInputDeatils:state.orgCA.CAinputDetails
    }
}
export default connect(mapStateToProps, {getUserInput,getUserSelectedFile})(OrgCaForm);