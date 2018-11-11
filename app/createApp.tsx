import { Provider } from "react-redux";
import HotelSearch from "./views/HotelSearch";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import searcher from './modules/hotelSearch/searcher'

function createApp() {
    const store = createStore(
        reducer,
        applyMiddleware(
            searcher
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