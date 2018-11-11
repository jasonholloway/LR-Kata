import State from './State'
import Action from './Action'
import reduceSearch from './modules/hotelSearch/reducer'

function reducer(state: State, action: Action): State {
    return initial(state)
        || reduceError(state, action)
        || reduceSearch(state, action)
        || noop(state);
}

function initial(state: State): State | false {
    if(!state) {
        return {
            isSearching: false,
            hotels: [],
            errors: []
        };        
    }
    return false;
}

function reduceError(state: State, action: Action): State | false {
    return false;
}

function noop(state: State): State {
    return state;
}

export default reducer;
