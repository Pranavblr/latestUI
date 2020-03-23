import React, { Component } from 'react';
import { Grid, Button } from '@scuf/common';

class PeerHomePage extends Component {
    render() {
        return (
            <div>
            <Grid className="forms-homepage">
                    
                    <Grid.Row>
                        <Grid.Column width={3}>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Grid.Row >
                                <Grid.Column width={12} className="setup-available">
                                    <div >
                                   <h5>No Peer setup available</h5>
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
                                        <Button type="primary" content="ADD PEER"
                                        onClick={()=>this.props.handleClickAddPeer()} />
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

export default PeerHomePage;