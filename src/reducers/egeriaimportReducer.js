import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function egeriaimportReducer(state = initialState.egeriaimport, action) {
    // state variable here reps just an array of courses
    console.log("egeriaimporReducer ");
    console.dir(action);
    switch(action.type) {
        case types.LOAD_EGERIA_IMPORT_SUCCESS:
            return Object.assign([], state, action.egeriaimport);
        default:
            return state;
    }
}