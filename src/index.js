import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { fetchSWPeople } from './actions';

import App from './components/App';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe( () => console.log('store', store.getState()) );
store.dispatch(fetchSWPeople());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)
