import { SELECT_SW_PERSON } from '../actions';

export default function(state = null, action) {
    switch(action.type) {
        case SELECT_SW_PERSON: 
            return action.person;
        default:
            state;
    }

    return state;
}