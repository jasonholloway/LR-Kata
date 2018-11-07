import { mount, ReactWrapper } from "enzyme";
import React, { Component } from "react";
import "jest-enzyme"

class HotelList extends Component {
    render() {
        return <section id="hotelList">
                    Hello!
                    <ul>

                    </ul>
                </section>
    }
}

describe('HotelList', () => {

    let dom: ReactWrapper;
    let section: ReactWrapper;

    beforeEach(() => {
        dom = mount(<HotelList/>);
        section = dom.find('section#hotelList')
    })

    it('renders as <section> with id="hotelList"', () => {
        expect(section).toExist();
    })

    it('contains single <ul>', () => {
        expect(section).toContainExactlyOneMatchingElement('ul');
    })

    describe('at first', () => {
        it('lists no hotels', () => {
            expect(section.find('ul li')).not.toExist();
        })
    })

})
