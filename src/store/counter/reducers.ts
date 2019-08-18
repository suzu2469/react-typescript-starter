import { Reducer } from 'redux'
import * as Actions from '~/store/counter/actions'
import * as Types from '~/store/counter/types'

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}

const reducer: Reducer<CounterState, Actions.Action> = (state, action) => {
  if (!state) {
    return initialState
  }

  switch (action.type) {
    case Types.Increment:
      return { ...state, count: state.count + 1 }

    case Types.Decrement:
      return { ...state, count: state.count - 1 }

    default:
      return state
  }
}

export default reducer
