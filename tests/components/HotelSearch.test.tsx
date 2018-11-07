import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import "jest-enzyme"
import { createStore, Store, applyMiddleware } from "redux";
import thunkMiddleware from 'react-thunk'
import { Action, State, reducer } from '../../src/app/core'
import HotelSearch from '../../src/app/HotelSearch'

describe('HotelSearch', () => {

    let dom: ReactWrapper;
    let section: ReactWrapper;
    let store: Store<State, Action>;

    beforeEach(() => {
        store = createStore(reducer); // , applyMiddleware(thunkMiddleware));
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

        it('performs default hotel search', () => {
            expect(store.getState().isSearching).toBeTruthy();
        })
    })

})
