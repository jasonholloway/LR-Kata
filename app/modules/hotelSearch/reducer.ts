import { hotelsFound } from "./actions";
import Action from "./Action";
import { createReducer } from "../../utils";

const initial = {
    hotels: []
} 

type State = typeof initial

export default createReducer<State, Action>((state = initial, action) => {
    switch(action.type) {
        case hotelsFound.type:
            return { ...state, ...{ hotels: action.hotels } };
        
        default:
            return state;
    }
})
