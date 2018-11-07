import { mount } from "enzyme";
import React, { Component } from "react";
import "jest-enzyme"

class HotelList extends Component {
    render() {
        return <h1>Hello!</h1>
    }
}

test('HotelList renders', () => {
    const dom = mount(<HotelList/>);
    expect(dom.find('h1')).toExist();
})