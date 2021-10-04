import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import appReducer from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(appReducer, persistedState, applyMiddleware(thunk));

store.subscribe(throttle(() => {
  saveState({
    session: store.getState().session
  });
}, 1000));

export default store;
