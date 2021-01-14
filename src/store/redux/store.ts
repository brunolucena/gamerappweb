import createSagaMiddleware from 'redux-saga';
import mySaga from 'store/sagas';
import reducers, { ReduxStore } from './';
import { createWrapper } from 'next-redux-wrapper';
import { env } from 'lib/configs';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
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

export const makeStore = (initialState: any) => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    combineReducers(reducers),
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  (store as StoreWithSaga).sagaTask = sagaMiddleware.run(mySaga)

  return store;
}

export const useTypedSelector: TypedUseSelectorHook<ReduxStore> = useSelector;

// @ts-ignore
export const wrapper = createWrapper<ReduxStore>(makeStore, { debug: env !== 'production' })
