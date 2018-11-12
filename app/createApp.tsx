import { Provider } from "react-redux";
import HotelSearch from "./views/HotelSearch";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import hotelSearcher from './modules/hotelSearcher'
import { composeWithDevTools } from 'redux-devtools-extension'
import State from "./State";

function createApp(preState: State = undefined) {
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