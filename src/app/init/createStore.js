import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from './reducers';

function createAppStore(history, preloadedState = {}) {
  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const middlewares = [
    thunk,
    routerMiddleware(history)
  ];
  const store = createStore(
    connectRouter(history)(combineReducers(reducers)),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return {
    store,
    history
  };
}

export default createAppStore;
