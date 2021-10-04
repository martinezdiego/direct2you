import {combineReducers} from 'redux';
import sessionReducer from './sessionReducer';

const config = {
    session: sessionReducer
};

const appReducer  = combineReducers(config);

export default appReducer;
