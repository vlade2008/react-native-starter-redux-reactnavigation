import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducer from '../reducers';

export default function configureStore(initialState) {

    const store = createStore(reducer, initialState,  composeWithDevTools(
        applyMiddleware(thunk)
    ));

    return store;
}
