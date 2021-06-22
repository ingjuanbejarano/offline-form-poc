import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {
  reducer as network,
  createNetworkMiddleware,
} from 'react-native-offline'

import { formReducer } from './reducers'
import { rootSaga } from './sagas'

const reducers = {
  formReducer,
  network,
}

export const reduxStore = () => {
  const networkMiddleware = createNetworkMiddleware({
    regexActionType: /^OTHER/,
    actionTypes: ['SUBMIT_FORM'],
    queueReleaseThrottle: 250,
  })

  const sagaMiddleware = createSagaMiddleware()
  const rootReducer = combineReducers(reducers)
  const middlewares = [networkMiddleware, sagaMiddleware]

  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  sagaMiddleware.run(rootSaga)
  return store
}
