import React, { Component } from 'react';
import { Grid, Card, Select, Input, Tab } from '@scuf/common';
import {connect} from 'react-redux';

import {navigateBetweenFormType} from '../../../actions/orgSetUpMultipartFormNavigation';
import {getUserInput,handleClickOrdererCheckBox,getSelectedOrdererFile} from '../../../actions/OrgSetUp/orgConfiguration/orgOrderer';
import cloudUploadIcon from '../../../assets/images/orgSetup/cloud_uplod.svg';
import Loader from '../../../components/Shared/Loader/Loader';
import ErrorMessage from '../../../components/Shared/ErrorMessage/ErrorMessage';

let fileReader;
class OrdererForm extends Component {
    constructor(props){
        super(props);
        this.state={
           enableTLSAuth:false,
           enableClientTLSAuth:false,
           enableOpTLSAuth:false,
           enableOpClientTLSAuth:false
        }
       }
    navigateBetweenForms = formType =>{
        this.props.setCurrentHomePage(formType);
        this.props.navigateBetweenFormType(formType);
     }
     fetchInputDetails = (key,value)=>{
         let inputObject= {
             key:key,
             value:value
         }
         this.props.getUserInput(inputObject);
     }
     fetchInputSelectedFile = (key,file)=>{
        fileReader = new FileReader();
        fileReader.onloadend = ()=>{
            var content = fileReader.result;
            
            console.log('file-content',content);
            var inputFileDetails = {
                key:key,
                value:fileReader.result
            }
           this.props.getSelectedOrdererFile(inputFileDetails);
             
        }
       fileReader.readAsText(file);
     }
     handleClickCheckBoxStatus = (key)=>{
        if(key==='enableTLSAuth'){
          this.setState({
            enableTLSAuth:!this.state.enableTLSAuth
          },function(){
            this.props.handleClickOrdererCheckBox(
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
               this.props.handleClickOrdererCheckBox(
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
                this.props.handleClickOrdererCheckBox(
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
                this.props.handleClickOrdererCheckBox(
                    {
                        key:'enableOpClientTLSAuth',
                        value:this.state.enableOpClientTLSAuth
                    }
                )
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
                    this.props.creatOrgOrdererLoading?
                    <Loader/>:''
                }
                {
                    this.props.createOrgOrderererrorMessage?
                    <ErrorMessage page="org-Orderer" message={this.props.createOrgOrderererrorMessage}
                    open={true}
                     />:""
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
                            <h5>Orderer Node Configuration</h5>
                        </Grid.Column>
                        </Grid.Row>
                    
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Name</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.fetchInputDetails("name",value)} className="form-input" placeholder="Orderer Name" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>FQDN</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input  onChange={(value)=>this.fetchInputDetails("fqdn",value)} className="form-input" placeholder="FQDN" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Id</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input  onChange={(value)=>this.fetchInputDetails("enrollId",value)} className="form-input" placeholder="Orderer Enroll Id" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enroll Secret</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input  onChange={(value)=>this.fetchInputDetails("enrollSecret",value)}  className="form-input" placeholder="Orderer Enroll Secret" />
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Type</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Select placeholder="Select a State" defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} options={CaListOptions} />
                        </Grid.Column>
                    </Grid.Row> */}
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input  value={this.props.ordererInputDetails.serverCert} className="form-input" placeholder="Orderer Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input30">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input onChange={(e)=>this.fetchInputSelectedFile("serverCert",e.target.files[0])}
                                 id="file-input30" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.ordererInputDetails.serverKey} className="form-input" placeholder="Orderer Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input31">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input 
                                 id="file-input31" type="file" 
                                 onChange={(e)=>this.fetchInputSelectedFile("serverKey",e.target.files[0])} />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <h5>Orderer Admin Configuration</h5>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Admin Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.ordererInputDetails.adminCert} className="form-input" placeholder="Orderer Admin Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input45">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input onChange={(e)=>this.fetchInputSelectedFile("adminCert",e.target.files[0])}
                                 id="file-input45" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Orderer Admin  Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.ordererInputDetails.adminKey} className="form-input" placeholder="Orderer Admin  Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input46">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input onChange={(e)=>this.fetchInputSelectedFile("adminKey",e.target.files[0])}
                                 id="file-input46" type="file" />
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
                            <label>Orderer Node IP Address</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input onChange={(value)=>this.fetchInputDetails("ipAddress",value)} className="form-input" placeholder="Orderer Node IP Address" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Operations Service Port</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input  onChange={(value)=>this.fetchInputDetails("opServicePort",value)} className="form-input" placeholder="Operations Service Port" />
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
                           <Select placeholder="Select a State" defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} options={CaListOptions} />
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
                           onChange={(value)=>this.fetchInputDetails("tlsOpsServerRootCAId",value)}
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
                            <Input value={this.props.ordererInputDetails.tlsServerCert} className="form-input" placeholder="TLS Server Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input32">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input 
                                onChange={(e)=>this.fetchInputSelectedFile("tlsServerCert",e.target.files[0])}
                                 id="file-input32" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Server key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.ordererInputDetails.tlsServerKey} className="form-input" placeholder="TLS Server key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input33">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input 
                               onChange={(e)=>this.fetchInputSelectedFile("tlsServerKey",e.target.files[0])}
                                 id="file-input33" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.ordererInputDetails.tlsClientCert} className="form-input" placeholder="TLS Client Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input34">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input 
                                onChange={(e)=>this.fetchInputSelectedFile("tlsClientCert",e.target.files[0])} 
                                 id="file-input34" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Client Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.ordererInputDetails.tlsClientKey}  className="form-input" placeholder="TLS Client Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input35">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input 
                               onChange={(e)=>this.fetchInputSelectedFile("tlsClientKey",e.target.files[0])}
                                 id="file-input35" type="file" />
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
                           <Select placeholder="Select a State" defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} options={CaListOptions} />
                        </Grid.Column>
                    </Grid.Row>:''

                    }
                    
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Select TLS Ops Server Root Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                           <Select placeholder="Select a State" defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} options={CaListOptions} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Certificate</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.ordererInputDetails.tlsOpsServerCert}  className="form-input" placeholder="TLS Ops Server Certificate" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input37">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input 
                               onChange={(e)=>this.fetchInputSelectedFile("tlsOpsServerCert",e.target.files[0])}
                                 id="file-input37" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>TLS Ops Server Key</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Input value={this.props.ordererInputDetails.tlsOpsServerKey} className="form-input" placeholder="TLS Ops Server Key" />
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <div class="image-upload">
                                <label for="file-input38">
                                    <img src={cloudUploadIcon} alt="" />
                                </label>
                               <input 
                               onChange={(e)=>this.fetchInputSelectedFile("tlsOpsServerKey",e.target.files[0])}
                                 id="file-input38" type="file" />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <label>Enable Operations Client TLS Authentication</label>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="button b2" id="button-18">
                                <input  onChange={()=>this.handleClickCheckBoxStatus("enableOpClientTLSAuth")} type="checkbox" className="checkbox" />
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
                           <Select placeholder="Select a State" defaultValue={CaListOptions&&CaListOptions.length>0?CaListOptions[0].value:0} options={CaListOptions} />
                        </Grid.Column>
                    </Grid.Row>:''

                    }
                    
                </Grid>
            </div>
        );
    }
}
export const mapStateToProps = state=>{
    console.log('orderer-form-input-details',state.orgOrderer.ordererInputDetails);
    return {
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType,
        caList:state.orgMSP.caList,
        ordererInputDetails:state.orgOrderer.ordererInputDetails,
        creatOrgOrdererLoading:state.orgOrderer.creatOrgOrdererLoading,
        createOrgOrderererrorMessage:state.orgOrderer.createOrgOrderererrorMessage
    }
}
export default connect(mapStateToProps,{navigateBetweenFormType,
    getUserInput,handleClickOrdererCheckBox,getSelectedOrdererFile})(OrdererForm);