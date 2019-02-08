import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import counterReducer from '~/store/counter/reducers'
import { CounterState } from '~/store/counter/types'

export type RootState = {
  counter: CounterState
}

const middleware = applyMiddleware(thunk)

const reducer = combineReducers({
  counter: counterReducer
})

const store = createStore(reducer, middleware)

export default store
