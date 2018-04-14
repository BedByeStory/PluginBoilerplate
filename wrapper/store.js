import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { rtc, connected } from 'redux-rtc';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = (devtools || compose);
const middleware = composeEnhancers(applyMiddleware(connected));

function createReducer(asyncReducers) {
  return combineReducers({
    rtc,
    ...asyncReducers,
  });
}

export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState, middleware);
  store.asyncReducers = {};
  return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
