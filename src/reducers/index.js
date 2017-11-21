import {combineReducers} from 'redux';
import session from './sessionReducer';
import egeriaimport from './egeriaimportReducer';

const rootReducer = combineReducers({
    // short hand property names
    egeriaimport,
    session
})

export default rootReducer;