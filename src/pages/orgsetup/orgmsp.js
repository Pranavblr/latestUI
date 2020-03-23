import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "@scuf/common";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./orgmsp.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export class OrgMspView extends Component {

    constructor(props) {
        super(props);
        this.state = { showAddOrg: false };
        this.handleShowAddOrg = this.handleShowAddOrg.bind(this);
    }

    handleShowAddOrg(){
        this.setState({showAddOrg: !this.state.showAddOrg})
    }
    render(){
        let {nwdata} = this.props
        console.log('props ',nwdata)
        let options = {}
        if (nwdata.length > 0 ) options = nwdata[0]
        const defaultOption = options[0]  
        
        return (
            <Container fluid={true}>
                
                <Row>
                    <div class='orgtitle'>Organizations</div>
                </Row>

                <Row id='orglist'>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org1</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org2</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org3</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org4</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org5</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org6</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org7</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org8</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org9</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org10</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org11</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org12</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org13</p>
                    </div>
                    <div>
                    <img src={process.env.PUBLIC_URL + '/images/org.png'}/>
                    <p align='center'>Org14</p>
                    </div>
                    
                </Row>

                <Row style={{"background-color": "#F7F7F7"}}>
                    <div style={{"background-color": "#1792E5", "margin-left": "15px"}}>
                        <Button class='addorgbtn' type="primary" iconRoot="building" icon="add" content="Add Org" iconPosition="left" onClick= { this.handleShowAddOrg }></Button>
                    </div>
                </Row>

                {this.state.showAddOrg && (
                    <div>
                    <Row>
                        <div class='orgtitle'>Add Organization</div>
                    </Row>
                    
                    <Row class='justify-content-start'>
                        <Col xs={12} md={3}>
                            <label class='orgsubtitle' for="name">Org Name</label>
                        </Col>
                        <Col xs={12} md={9}>
                            <input class='form-control' type="text" name="orgname" id="orgname" value=""/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <label class='orgsubtitle' for="msp">Org MSP ID</label>
                        </Col>
                        <Col xs={12} md={9}>
                            <Dropdown class='orgmsplist' options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <label class='orgsubtitle' for="msp">Org Admin ID</label>
                        </Col>
                        <Col xs={12} md={9}>
                        <Dropdown class='orgadminlist' options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={3}>
                            <label class='orgsubtitle' for="msp">Org Admin Secret</label>
                        </Col>
                        <Col xs={12} md={9}>
                            <input class='form-control' type="text" name="orgadminsecret" id="orgadminsecret" value=""/>
                        </Col>
                    </Row>
                    <Row style= {{"justify-content" : "center"}}>
                    <Row>
                        <Col xs={12} md={6}>
                        <Button type="primary" content="CANCEL" onClick={ this.handleShowAddOrg }></Button>
                        </Col>
                        <Col xs={12} md={6}>
                        <Button type="primary" content="SUBMIT"></Button>
                        </Col>
                    </Row>
                    </Row>
                    </div>
                ) }   
            
            </Container>
        );
    }
}

const mapStateToProps = state => {
  console.log("orgmspview mapStateToProps called ", state);

  if (state.network.data == undefined) {
    return { nwdata: {} };
  }
    var orglist1 = state.network.data.network[0].channels[0].orgs.map( (item, index) => item.participantid)
    var orglist2 = state.network.data.network[1].channels[0].orgs.map( (item, index) => item.participantid)
    console.log('list1 ', orglist1, 'list2 ',orglist2)
    return { nwdata: [orglist1, orglist2] }
};

export default connect(mapStateToProps)(OrgMspView);
