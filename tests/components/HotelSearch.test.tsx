import { mount, ReactWrapper } from "enzyme";
import "jest-enzyme"
import React from "react";
import { Provider } from "react-redux";
import { createStore, Store, applyMiddleware } from "redux";
import reducer from '../../app/reducer'
import HotelSearch from '../../app/views/HotelSearch'
import { hotelsSearched } from "../../app/modules/hotelSearch/actions";
import FakeSearchDispatcher from "../fakes/FakeSearchDispatcher";
import ActionSnooper from "../fakes/ActionSnooper";
import State from "../../app/State";

describe('HotelSearch', () => {

    let dom, section: ReactWrapper;
    let snooper: ActionSnooper;
    let searchDispatcher: FakeSearchDispatcher;
    let store: Store<State, any>;

    beforeEach(() => {
        snooper = new ActionSnooper();
        searchDispatcher = new FakeSearchDispatcher();

        store = createStore(
            reducer,
            applyMiddleware(
                snooper.middleware(),
                searchDispatcher.middleware())
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
            await searchDispatcher.flush();
            section = section.update();
        })

        it('lists some hotels', () => {
            expect(section.find('ul li')).toExist();
        })
    })
})
