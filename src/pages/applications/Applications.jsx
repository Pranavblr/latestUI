import React, { Component } from "react";
import { connect } from "react-redux";

class Applications extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          value: 3
        };
    }
    render() {
        return(
            <div>
                <h1>Applications</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(Applications);