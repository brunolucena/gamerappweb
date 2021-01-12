import createSagaMiddleware from 'redux-saga';
import mySaga from 'store/sagas';
import reducers, { ReduxStore } from './';
import { createWrapper } from 'next-redux-wrapper';
import { env } from 'lib/configs';
import {
  Middleware,
  Store,
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

declare const $CombinedState: unique symbol

export interface StoreWithSaga extends Store<{ readonly [$CombinedState]?: undefined; } & { [x: string]: unknown; }, never> {
  sagaTask: any;
}

const bindMiddleware = (middleware: Middleware[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')

    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    combineReducers(reducers),
    bindMiddleware([sagaMiddleware]),
  );

  (store as StoreWithSaga).sagaTask = sagaMiddleware.run(mySaga)

  return store;
}

// @ts-ignore
export const wrapper = createWrapper<ReduxStore>(makeStore, { debug: env !== 'production' })
