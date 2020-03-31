import React, { Component } from 'react';
import { Grid,Button,Tab} from '@scuf/common';
import {connect} from 'react-redux';

import {navigateBetweenFormType} from '../../../actions/orgSetUpMultipartFormNavigation';

class OrgCAhome extends Component {
    navigateBetweenForms = (formType)=>{
        
      this.props.setCurrentHomePage(formType);
      this.props.navigateBetweenFormType(formType)
    }
    render() {
        return (
            <div>
            <Grid className="forms-homepage">
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
                        <Grid.Column width={3}>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Grid.Row >
                                <Grid.Column width={12} className="setup-available">
                                    <div >
                                   <h5>No CA setup available</h5>
                                   </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={12}>
                                    <div>
                                   <h6> Click on the button below to <br/> 
                                   <span className="create">create CA</span></h6> 
                                   </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={12}>
                                <div className="home-page-buttons">
                                        <Button type="primary" content="ADD CA"
                                        onClick={()=>this.props.handleClickAddCA('orgCa')} />
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                                   
                                    
                                    
                                
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </div>
        );
    }
}
export const mapStateToProps = state=>{
    return {
        currentFormType: state.orgSetUpMultipartFormReducer.currentFormType
    }
}
export default connect(mapStateToProps,{navigateBetweenFormType})(OrgCAhome);