import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

const middleware = [thunk];

const configureStore = (initialState?: any) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducers, initialState, composeEnhancers(applyMiddleware(...middleware)));
  return store;
};

export default configureStore;
