import { Middleware } from "redux";
import { hotelsSearched, hotelsFound } from "../../app/actions";
import { Action } from "../../app/Action";

type Task = () => Promise<void> | void

export default class FakeSearcher {

    private tasks: Task[] = []

    async flush() {
        return Promise.all(this.tasks.map(fn => fn()));
    }

    middleware(): Middleware {
        const enqueue = (t: Task) => this.tasks.push(t);

        return ({dispatch}) => next => (action: Action) => {
            switch(action.type) {
                case hotelsSearched.type:
                    enqueue(() => {
                        dispatch(hotelsFound({ hotels: [ { id: 123 } ] }))
                    });
                    
                default:
                    return next(action);
            }
        };
    }

}
