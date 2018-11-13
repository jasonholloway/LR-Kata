import { mount, ReactWrapper } from "enzyme";
import "jest-enzyme"
import React from "react";
import { Provider } from "react-redux";
import { createStore, Store, applyMiddleware } from "redux";
import reducer from '../../app/reducer'
import HotelSearch from '../../app/components/HotelSearch'
import { hotelsSearched } from "../../app/store/hotelSearch/actions";
import FakeSearcher from "../fakes/FakeSearcher";
import ActionSnooper from "../fakes/ActionSnooper";
import AppState from "../../app/AppState";

describe('HotelSearch', () => {

    let dom, section: ReactWrapper;
    let snooper: ActionSnooper;
    let searcher: FakeSearcher;
    let store: Store<AppState, any>;

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

    const flushAndUpdate = async () => {
        await searcher.flush()
        section = section.update();
    }


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

        it('shows filter box as part of form', () => {
            expect(section.find('form#filter input[type="text"]')).toExist();
        })

        it('immediately loads hotels with empty filter', () => {
            expect(snooper.actions)
               .toContainEqual(hotelsSearched({ filter: '' }));
        })
    })

    describe('after a slight gap', () => {
        beforeEach(flushAndUpdate);

        it('lists some hotels', () => {
            expect(section.find('ul li')).toExist();
        })
    })

    describe('on submission of filter', () => {
        beforeEach(async () => {
            const input = section.find('form#filter input').first();
            (input.instance() as any).value = 'wibble';
            input.simulate('change');
        })

        it('dispatches search action', () => {
            expect(snooper.actions)
               .toContainEqual(hotelsSearched({ filter: 'wibble' }));
        })

        describe('on return of searcher', () => {
            beforeEach(flushAndUpdate);

            it('lists returned hotels', () => {
                expect(section.find('ul li h3').first().text())
                    .toMatch(/wibble/);
            })
        })
    })
})
