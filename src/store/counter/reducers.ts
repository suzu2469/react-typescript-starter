import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actions from '~/store/counter/actions'
import { CounterState } from '~/store/counter/types'

const initialState: CounterState = {
  count: 0
}

const reducer = reducerWithInitialState(initialState)
  .case(actions.decrement, (state, _) => ({
    ...state,
    count: state.count - 1
  }))
  .case(actions.increment, (state, _) => ({ ...state, count: state.count + 1 }))

export default reducer
