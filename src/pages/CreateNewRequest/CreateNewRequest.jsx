import React, { Component } from 'react';

import Signup from '../Signup/Signup';

class CreateNewRequest extends Component {
    render() {
        return (
            <div>
              <Signup {...this.props}/>
            </div>
        );
    }
}

export default CreateNewRequest;