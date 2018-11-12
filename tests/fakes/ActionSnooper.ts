import { Middleware } from "redux";

class ActionSnooper {
    actions = []

    middleware(): Middleware {
        const add = (a) => this.actions.push(a);

        return () => next => action => {
            add(action);
            return next(action);
        };
    }
}

export default ActionSnooper;
