import { Action, Store, applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { ReduxStore } from './';

import reducers from './index';
import { PersistPartial } from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'gamerappweb',
  storage,
};

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedCombinedReducers = persistCombineReducers(persistConfig, reducers);

const rootReducer = (state: PersistPartial | undefined, action: Action<any>) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'LOGOUT') {
    storage.removeItem('persist:gamerappweb');
    state = undefined;
  }

  return persistedCombinedReducers(state, action);
};

export const sagaMiddleware = createSagaMiddleware();

const store: Store<ReduxStore> = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

export default store;
