import { hotelsFound } from "./actions";
import State from "../../State";
import Action from "../../Action";

function reduceSearch(state: State, action: Action): State | false {
    switch(action.type) {
        case hotelsFound.type:
            return { ...state, ...{ hotels: action.hotels } };

        default:
            return false;
    }
}

export default reduceSearch;
