import { Middleware } from "redux";
import Action from "../hotelSearch/Action";
import { hotelsSearched, hotelsFound } from "../hotelSearch/actions";
import data from './data.json'

// This is a stub implementation: really this would delegate to a server asynchronously

const searcher: Middleware = ({dispatch}) => next => async (action: Action) => {
    if(action.type == hotelsSearched.type) {
        dispatch(hotelsFound({ 
            hotels: data.filter(d => new RegExp(action.filter).test(d.name))
        }))
    }

    return next(action);
};

export default searcher;
