import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Card, Button, Input } from '@scuf/common';
import { DataTable } from '@scuf/datatable';
import { Switch, Route, Link, Redirect } from 'react-router-dom';

import {getCAList} from '../../actions/OrgSetUp/orgCA';
import {getOrgnizationDetails} from '../../actions/OrgSetUp/orgMSP';

import "./NewDashboard.css";
import Applications from "../applications/Applications";
import Organisations from "../organisations/Organisations";
import AllChannels from "../allchannels/AllChannels";


const orgData = [
    { application: 'Honeywell GDT', health: '67%', blocks: 220, members: 60, peers: 48 },
    { application: 'Honeywell GDT', health: '67%', blocks: 220, members: 60, peers: 48 },
    { application: 'Honeywell GDT', health: '67%', blocks: 220, members: 60, peers: 48 }
];

class NewDashboard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: 3
        };
    }
    componentDidMount(){
      }
    handleClickCreate=()=>{
            this.props.getCAList();
            this.props.getOrgnizationDetails();
            this.props.history.push('/create-orgSetup');
      }
    render() {
        return (
            <div>
                <Grid className="dashboard-content">
                    <Grid.Row className="title-section">
                        <Grid.Column width={6} className="title">
                            <h2>{this.props.orgName?this.props.orgName.toUpperCase():
                            (localStorage.getItem('current-orgName')?localStorage.getItem('current-orgName').toUpperCase():'')}</h2>
                        </Grid.Column>
                        <Grid.Column width={6} className="create-newOrg">
                            <Button type="primary" content="VIEW"  onClick={()=>{this.handleClickCreate()}}/>
                        </Grid.Column>
                    </Grid.Row>
                    <br/><br/>
                    <Grid.Row className="org-list">
                        <Grid.Column width={12}>
                            <Card className="org-list-data">
                                <Input className="input-example" placeholder="Search for" search={true} />
                                <DataTable
                                    className="data-table"
                                    data={orgData}
                                    reorderableColumns={true}
                                    resizableColumns={true}
                                >
                                    <DataTable.Column className="application-field" field="application" header="APPLICATION" sortable={true} />
                                    <DataTable.Column  className="health-field" field="health" header="HEALTH" sortable={true} />
                                    <DataTable.Column  className="common-field" field="blocks" header="BLOCKS" sortable={true} />
                                    <DataTable.Column  className="common-field" field="members" header="MEMBERS" sortable={true} />
                                    <DataTable.Column  className="common-field" field="peers" header="PEERS" sortable={true} />
                                </DataTable>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            //old code starts
            // <div>
            //     <div>
            //         <Nav activeKey="/mydashboard/allchannels"
            //         onSelect={selectedKey => console.log(`selected ${selectedKey}`)}>
            //             <Nav.Item>
            //                 <Nav.Link href="/mydashboard/allchannels">All channels</Nav.Link>
            //             </Nav.Item>
            //             <Nav.Item>
            //                 <Nav.Link href="/mydashboard/applications">Applications</Nav.Link>
            //             </Nav.Item>
            //             <Nav.Item>
            //                 <Nav.Link href="/mydashboard/organisations">Organisations</Nav.Link>
            //             </Nav.Item>
            //         </Nav>
            //         <ul>
            //             <Link to="/mydashboard/allchannels"><div>All channels</div></Link>
            //             <Link to="/mydashboard/applications"><div>Applications</div></Link>
            //             <Link to="/mydashboard/organisations"><div>Organisations</div></Link>
            //         </ul>
            //     </div>
            //     <div>
            //         <Switch>
            //             <Route {...this.props} path="/mydashboard/allchannels" component={AllChannels} />
            //             <Route path="/mydashboard/applications" component={Applications} />
            //             <Route path="/mydashboard/organisations" component={Organisations} />
            //             <Redirect to="/mydashboard/allchannels" />
            //         </Switch>
            //     </div>
            // </div>
            //old code ends
        )
    }
}

const mapStateToProps = state => {
    console.log('current-orgname', state.authenticate.currentOrgName)
    return {
        orgName:state.authenticate.currentOrgName,
        mspReducer: state.orgMSP,
    }
 
}

export default connect(mapStateToProps,{getCAList,getOrgnizationDetails})(NewDashboard);