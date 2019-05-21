import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'

import counterReducer from '~/store/counter/reducers'
import { CounterState } from '~/store/counter/types'
import { Action as CounterAction } from '~/store/counter/actions'

export type RootState = {
  counter: CounterState
}
export type RootAction = CounterAction
export type RootThunkAction<R> = ThunkAction<R, RootState, void, RootAction>
export type RootThunkDispatch = ThunkDispatch<RootState, void, RootAction>

const middleware = applyMiddleware(thunk)

const reducer = combineReducers({
  counter: counterReducer
})

const store = createStore(reducer, middleware)

export default store
