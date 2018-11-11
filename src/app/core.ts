import { hotelsFound } from "./actions";
import { Action } from "./Action";

type State = {
    isSearching: boolean,
    hotels: any[],
    errors: any[]
}

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

function reduceSearch(state: State, action: Action): State | false {
    switch(action.type) {
        case hotelsFound.type:
            return { ...state, ...{ hotels: action.hotels } };

        default:
            return false;
    }
}

function noop(state: State): State {
    return state;
}

export { State, reducer }
