export const RECEIVE_SW_PEOPLE = 'RECEIVE_SW_PEOPLE';
export const FAVORITE_SW_PEOPLE = 'FAVORITE_SW_PEOPLE';
export const UNFAVORITE_SW_PEOPLE = 'UNFAVORITE_SW_PEOPLE';

function receiveSWPeople(json) {
    const swpeople = json.results;

    return {
        type: RECEIVE_SW_PEOPLE,
        swpeople
    }
}

function fetchSWPeopleJson() {
    return fetch('https://swapi.co/api/people/')
        .then( response => response.json() )
}

export function fetchSWPeople() {
    return function(dispatch) {
        return fetchSWPeopleJson()
            .then( json => dispatch(receiveSWPeople(json)) )
    }  
}

export function favoritePeople(people) {
    return {
        type: FAVORITE_SW_PEOPLE,
        people
    }
}

export function unfavoritePeople(people) {
    return {
        type: UNFAVORITE_SW_PEOPLE,
        people
    }
}
