import { mount, ReactWrapper } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import "jest-enzyme"
import { createStore, Store, applyMiddleware } from "redux";
import { State, reducer } from '../../src/app/core'
import HotelSearch from '../../src/app/HotelSearch'
import { Action } from "../../src/app/Action";
import FakeSearcher from "../fakes/FakeSearcher";
import { hotelsSearched } from "../../src/app/actions";
import ActionSnooper from "../fakes/ActionSnooper";

describe('HotelSearch', () => {

    let dom, section: ReactWrapper;
    let snooper: ActionSnooper;
    let searcher: FakeSearcher;
    let store: Store<State, Action>;

    beforeEach(() => {
        snooper = new ActionSnooper();
        searcher = new FakeSearcher();

        store = createStore(
            reducer,
            applyMiddleware(
                snooper.middleware(),
                searcher.middleware())
        );
        
        dom = mount(<Provider store={store}><HotelSearch/></Provider>);
        section = dom.find('section#hotelSearch');
    })

    it('renders as <section> with id="hotelSearch"', () => {
        expect(section).toExist();
    })

    it('contains single <ul>', () => {
        expect(section).toContainExactlyOneMatchingElement('ul');
    })

    describe('at first', () => {
        it('lists no hotels', () => {
            expect(section.find('ul li')).not.toExist();
        })

        it('searches for Skegness', () => {
            expect(snooper.actions)
               .toContainEqual(hotelsSearched({ filter: 'Skegness' }));
        })
    })

    describe('after a slight gap', () => {
        beforeEach(async () => {
            await searcher.flush();
            section = section.update();
        })

        it('lists some hotels', () => {
            expect(section.find('ul li')).toExist();
        })
    })
})
