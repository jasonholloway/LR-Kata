type ActionType = 'SEARCH_REQUEST' | 'SEARCH_RESULT' | 'SEARCH_ERROR'
type Action = { type: ActionType }

type State = {
    isSearching: boolean,
    hotels: any[],
    errors: any[]
}

type Dispatch = (action: Action) => void

const defaultState: State = {
    isSearching: false,
    hotels: [],
    errors: []
}

function reducer(state: State, action?: Action) {
    if(!state) return defaultState;
    switch(action.type) {
        case 'SEARCH_REQUEST':
            return { ...state, isSearching: true };
        case 'SEARCH_RESULT':
            return state;
        case 'SEARCH_ERROR':
            return state;
    }
    assertUnreachable(action.type);
}

function assertUnreachable(x: never): never {
    throw new Error(`Didn't expect to get here`);
}

export { ActionType, Action, Dispatch, State, reducer }
