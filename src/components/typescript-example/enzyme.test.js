import {shallow, mount, render} from 'enzyme';
import Card from "./enzymeExample";
import React from "react";

it("expect to render Card component", () => {
    expect(shallow(<Card/>).length).toEqual(1)

    expect(shallow(<Card/>)).toMatchSnapshot();
})


//test components that have props
// it("expect to render CardList component", () => {
//     const mockRobot = [
//         {
//             id: 1,
//             name: "Hok"
//         }
//     ]
//     expect(shallow(<CardList mockRobot={mockRobot}/>)).toMatchSnapshot();
// })



// test stateful components
// it("correctly increments the counter", () => {
//     const wrapper = shallow(<CounterButton/>);
//     wrapper.find('[id="counter"]').simulate('click');
//     expect(wrapper.state()).toEqual({count: 1});
// })


//enzyme enable us to render component in test environment

//shallow dont render child components inside that component

//mount does a full dom rendering

//mount does a static rendering

//npm test -- --coverage  -> show coverage report

// describe('searchRobots', () => {
//     it("should return the initial state", () => {
//         expect(reducers.searchRobots(undefined, {})).toEqual({searchFields: ''});
//     })
// })