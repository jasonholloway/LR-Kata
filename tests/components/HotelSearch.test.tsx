import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import "jest-enzyme"
import { createStore, Store, applyMiddleware } from "redux";
import { State, reduce } from '../../src/app/core'
import HotelSearch from '../../src/app/HotelSearch'
import fakeSearcher from '../fakes/fakeSearcher'
import { Action } from "../../src/app/actions";

describe('HotelSearch', () => {

    let dom, section: ReactWrapper;
    let store: Store<State, Action>;

    let fakeTasks: (() => Promise<void> | void)[];
    const flushFakes = () => Promise.all(fakeTasks.map(fn => fn()));

    beforeEach(() => {
        fakeTasks = [];

        store = createStore(
            reduce,
            applyMiddleware(fakeSearcher(t => fakeTasks.push(t)))
        );

        dom = mount(<Provider store={store}><HotelSearch/></Provider>);
        section = dom.find('section#hotelList');
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

    describe('after a slight gap', () => {
        beforeEach(async () => {
            await flushFakes();
            section = section.update();
        })

        it('lists some hotels, via Searcher', () => {
            expect(section.find('ul li')).toExist();
        })
    })
})
