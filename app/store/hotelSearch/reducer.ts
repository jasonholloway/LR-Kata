import { hotelsFound } from "./actions";
import Action from "./Action";
import { createReducer } from "../../utils";
import Hotel from "./Hotel";

type State = {
    hotels: Hotel[]
}

const initial: State = {
    hotels: []
} 

export default createReducer<State, Action>((state = initial, action) => {
    switch(action.type) {
        case hotelsFound.type:
            return { ...state, ...{ hotels: action.hotels } };
        
        default:
            return state;
    }
})
