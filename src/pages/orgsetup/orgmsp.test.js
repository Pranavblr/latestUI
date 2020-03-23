import renderer from 'react-test-renderer';
import { OrgMspView } from './orgmsp'
import React from 'react';
import { shallow, mount } from 'enzyme';

const testdata = {
    "nwdata" : [["org1","org2","org3"], ["org4","org5","org6"]]
}

describe('should render orgmsp component properly', () => {


    it('org list should be displayed in combobox items', () => {

        const wrapper = mount(<OrgMspView nwdata={testdata}/>);
        const addorgbtn = wrapper.find('Button.addorgbtn')
        wrapper.setState({showAddOrg: true});
        addorgbtn.simulate('click')
        const dropdown = wrapper.find('Dropdown.orgadminlist')
        console.log('wrapper ', wrapper)
        expect(dropdown.props.options).toEqual(["org1","org2","org3"]);

    });

    it('org list should be displayed in combox items', () => {
        const component = renderer.create(
            <OrgMspView nwdata={testdata} />,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


})