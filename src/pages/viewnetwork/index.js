import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ViewNetwork extends Component {

    componentDidMount(){
        console.log('componentDidMount called')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate called')
    }
    render(){
        let { nwdata } = this.props
        let nwdatastr = JSON.stringify(nwdata)
        return (
            
            <div>
                { nwdatastr } 
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps called ', state)
    
    return { nwdata: state.network.data }
};

console.log('ViewNetwork compoent')
export default withRouter(connect(mapStateToProps)(ViewNetwork));