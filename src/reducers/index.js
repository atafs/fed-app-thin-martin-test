import { combineReducers } from 'redux';
import { RECEIVE_SW_PEOPLE } from '../actions';

function swpeople(state = [], action) {
    switch(action.type) {
        case RECEIVE_SW_PEOPLE:
            return action.swpeople;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ swpeople });

export default rootReducer;