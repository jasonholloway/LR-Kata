import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import "jest-enzyme"
import { createStore, Store, applyMiddleware, Dispatch } from "redux";
import thunk, { ThunkAction } from 'redux-thunk'
import { AppAction, State, reduce, Services } from '../../src/app/core'
import HotelSearch from '../../src/app/HotelSearch'

function buildStore(services: Services) {
    return createStore(
        reduce,
        applyMiddleware(thunk.withExtraArgument(services))
    ) as Store<State, AppAction>
}


describe('HotelSearch', () => {

    let section: ReactWrapper;
    let store: ReturnType<typeof buildStore>; // Store<State, AppAction>;

    beforeEach(() => {
        const services = {};

        store = buildStore(services);

        const dom = mount(<Provider store={store}><HotelSearch/></Provider>);
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

            //hotelSearcher.search.

            //check that api is called
            expect(store.getState().isSearching).toBeTruthy();
        })
    })

})
