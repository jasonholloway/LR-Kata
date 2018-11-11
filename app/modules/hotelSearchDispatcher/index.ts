import { Middleware } from "redux";
import Action from "../hotelSearch/Action";
import { hotelsSearched, hotelsFound, searchError } from "../hotelSearch/actions";

const searcher: Middleware = ({dispatch}) => next => async (action: Action) => {
    if(action.type == hotelsSearched.type) {
        await fetch(null)
                .then(res => res.json())
                .then(body => dispatch(hotelsFound({ hotels: [] })))
                .catch(error => dispatch(searchError({ error })));
    }

    next(action);
};

export default searcher;
