import React from 'react'
import { render } from 'react-dom'
import HotelSearch from './views/HotelSearch'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const root = document.getElementById('root');

const store = createStore(reducer, applyMiddleware());

render(
    <Provider store={store}>
        <HotelSearch/>
    </Provider>,
    root);
