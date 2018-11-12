import { Middleware } from "redux";
import Action from "../hotelSearch/Action";
import { hotelsSearched, hotelsFound, searchError } from "../hotelSearch/actions";
import data from './data.json'

const searcher: Middleware = ({dispatch}) => next => async (action: Action) => {
    if(action.type == hotelsSearched.type) {
        dispatch(hotelsFound({ hotels: data }))
    }

    return next(action);
};

export default searcher;
