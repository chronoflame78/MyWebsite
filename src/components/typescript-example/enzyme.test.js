import {shallow, mount, render} from 'enzyme';
import Card from "./enzymeExample";
import React from "react";

it("expect to render Card component", () => {
    expect(shallow(<Card/>).length).toEqual(1)

    expect(shallow(<Card/>)).toMatchSnapshot();
})


//enzyme enable us to render component in test environment

//shallow dont render child components inside that component

//mount does a full dom rendering

//mount does a static rendering

//npm test -- --coverage  -> show coverage report