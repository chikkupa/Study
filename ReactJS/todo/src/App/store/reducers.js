import {combineReducers} from 'redux';

const rootReducer = combineReducers(Object.assign({}));

export default (state, action) =>
 rootReducer(state, action);
