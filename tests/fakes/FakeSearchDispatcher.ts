import { Middleware } from "redux";
import { hotelsSearched, hotelsFound } from "../../app/modules/hotelSearch/actions";
import Action from "../../app/modules/hotelSearch/Action";

type Task = () => Promise<void> | void

export default class FakeSearchDispatcher {

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
                        dispatch(hotelsFound({ 
                            hotels: [ 
                                { name: 'Wibble', facilities: [], starRating: 5 } 
                            ] 
                        }))
                    });
                    
                default:
                    return next(action);
            }
        };
    }

}
