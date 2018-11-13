import { Provider } from "react-redux";
import HotelSearch from "./components/HotelSearch";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import hotelSearcher from './store/hotelSearcher'
import { composeWithDevTools } from 'redux-devtools-extension'
import AppState from "./AppState";

function createApp(preState: AppState = undefined) {
    const store = createStore(
        reducer,
        preState,
        composeWithDevTools(
            applyMiddleware(hotelSearcher)
        )
    );

    return { 
        store, 
        element: <Provider store={store}>
                    <HotelSearch/>
                </Provider>
    };
}

export default createApp;