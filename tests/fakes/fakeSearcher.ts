import { Middleware } from "redux";
import { Action, hotelsSearched, hotelsFound } from "../../src/app/actions";

const fakeSearcher: FakeMiddleware = enqueue => ({dispatch}) => next => (action: Action) => {
    
    switch(action.type) {
        case hotelsSearched.type:
            return enqueue(() => {
                dispatch(hotelsFound({ hotels: [ { id: 123 } ] }))
            });
            
        default:
            return next(action);
    }
};

type FakeMiddleware = (enqueue: (fn: () => Promise<void> | void) => void) => Middleware

export default fakeSearcher;
