import { combineReducers } from 'redux';
import { RECEIVE_SW_PEOPLE } from '../actions';
import { FAVORITE_SW_PEOPLE, UNFAVORITE_SW_PEOPLE } from '../actions';

function swpeople(state = [], action) {
    switch(action.type) {
        case RECEIVE_SW_PEOPLE:
            return action.swpeople;
        default:
            return state;
    }
}

function favoritePeople(state = [], action) {
    switch(action.type) {
        case FAVORITE_SW_PEOPLE:
            console.log('action and people', state, action);        
            state = [...state, action.people]
            return state;
        case UNFAVORITE_SW_PEOPLE:
            console.log('action and people', state, action);        
            state = state.filter(people => people.name !== action.people.name);
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ swpeople, favoritePeople });

export default rootReducer;