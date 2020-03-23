import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Card } from '@scuf/common';
import "./AllChannels.css";
import { Icon } from '@scuf/common';
import {Link} from 'react-router-dom';

class AllChannels extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          value: 3
        };
    }
    handleClickRediredctToDeatilsPage = (id)=>{
        this.props.history.push('/network-application/details/'+id)
    }
    render() {
        var allchannels = [
            {   "id":1,
                "application": "Go Direct Trade",
                "members": "1024",
                "blocks": "650",
                "isCritical": true
            },
            {   
                "id":2,
                "application": "Application 2",
                "members": "1024",
                "blocks": "650",
                "isCritical": true
            },
            {
                "id":3,
                "application": "Organisation 1",
                "members": "1024",
                "blocks": "650",
                "isCritical": true
            },
            {
                "id":4,
                "application": "Application 4",
                "members": "1024",
                "blocks": "650",
                "isCritical": false
            },
            {
                "id":5,
                "application": "Organisation 1",
                "members": "1024",
                "blocks": "650",
                "isCritical": false
            },
            {
                "id":6,
                "application": "Application 5",
                "members": "1024",
                "blocks": "650",
                "isCritical": false
            }
            
        ]
        
        return(
            <Grid>
                <Grid.Row>
                    <span className="page-heading">Critical Applications</span>
                </Grid.Row>
                <Grid.Row>
                    {allchannels.map((value, index) => {
                        return <Grid.Column key={index} width={4} mOrder={3} sOrder={1} >
                          <Card onClick={()=>this.handleClickRediredctToDeatilsPage(value.id)}>
                                <Card.Header>
                                    <p className="card-title">{value.application}</p>
                                </Card.Header>
                                <Card.Meta><p className="card-label">Application</p></Card.Meta>
                                <Card.Content className={(value.isCritical ? 'crictical': '')}>
                                    <p><span className="card-content">{value.members}</span> <span className="block-items">{value.blocks}</span></p>
                                    <p><span className="card-content-label">Members</span> <span className="block-items-label">Blocks</span></p>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    })}
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(AllChannels);