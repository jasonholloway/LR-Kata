import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Reducer } from 'redux';

type AppActionType = 'SEARCH_START' | 'SEARCH_RESULT' | 'SEARCH_ERROR' | 'ERROR'
type AppAction = { type: AppActionType }

type State = {
    isSearching: boolean,
    hotels: any[],
    errors: any[]
}

type Services = { }

type Reduction = State | ThunkAction<Promise<void>, State, Services, AppAction>


function reduce(state: State, action: AppAction): Reduction {
    return initialize(state)
        || reduceError(state, action)
        || reduceSearch(state, action)
        || noop(state);
}


type r = Reducer<State, AppAction>


function initialize(state: State): Reduction | false {
    if(!state) {
        return {
            isSearching: false,
            hotels: [],
            errors: []
        };        
    }
    return false;
}

function reduceError(state: State, action: AppAction): Reduction | false {
    return false;
}

function reduceSearch(state: State, action: AppAction): Reduction | false {
    switch(action.type) {
        case 'SEARCH_START':
            return async (dispatch, getState) => {
                //return { ...state, isSearching: true };
            };

        case 'SEARCH_RESULT':
            return state;

        case 'SEARCH_ERROR':
            return state;

        default:
            return false;
    }
}

function noop(state: State): Reduction {
    return state;
}

export { AppActionType, AppAction, Services, Reduction, State, reduce }
