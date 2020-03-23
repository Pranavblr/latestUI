import React, { Component } from 'react';
import { Input,Select,TextArea,Checkbox } from '@scuf/common';
const stateOptions = [ 
    { value: 'AL', text: 'Alabama' }, 
    {value: 'GA', text:'Georgia' }, 
    {value:'HI', text:'Hawaii'} 
];
class SignUptest extends Component {
    render() {
        return (
            <div className="container-fluid signup-page">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-11 col-sm-7 col-md-7 col-lg-6">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 signup-col">
                                <div className="signup-header">
                                    <h3>Register</h3>
                                    <hr />
                                </div>
                                
                                <div className="row">
                                    <ul class="list-group list-group-flush">
                                        <li>
                                            <div class="list-group-item-fixed">
                                                <strong class="list-group-left">Name:</strong>
                                                <span class="list-group-right">Hello West</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="list-group-item-fixed">
                                                <strong class="list-group-left">Email ID:</strong>
                                                <span class="list-group-right">hellowest@honeywell.com</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="list-group-item-fixed">
                                                <strong class="list-group-left">User Display Name:</strong>
                                                <span class="list-group-right">
                                                   <Input placeholder="Input" onChange={(data) => {alert(data);}}  />
                                                </span>
                                                
                                            </div>
                                        </li>
                                        <li>
                                            <div class="list-group-item-fixed">
                                                <strong class="list-group-left">Select Network:</strong>
                                                <span class="list-group-right">
                                                <Select placeholder="Select a State" options={stateOptions} onChange = {(value)=> (alert(value))}/>
                                                </span>
                                                
                                            </div>
                                        </li>
                                        <li>
                                            <div class="list-group-item-fixed">
                                                <strong class="list-group-left">Role:</strong>
                                                <span class="list-group-right">
                                                <Select placeholder="Select a State" options={stateOptions} onChange = {(value)=> (alert(value))}/>
                                                </span>
                                               
                                            </div>
                                        </li>
                                        <li>
                                            <div class="list-group-item-fixed">
                                                <strong class="list-group-left">Application:</strong>
                                                <span class="list-group-right">
                                                <Checkbox label="New" checked={false}/>
                                                <Checkbox label="Existing" checked={true} />
                                                </span>
                                               
                                            </div>
                                        </li>
                                        <li>
                                            <div class="list-group-item-fixed">
                                                <strong class="list-group-left">Comments:</strong>
                                                <span class="list-group-right">
                                                <TextArea placeholder='Type...' />
                                                </span>
                                                   
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUptest;