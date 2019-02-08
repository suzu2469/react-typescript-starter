import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import actions from '~/store/counter/actions'
import { RootState } from '~/store/index'

export const increment = (): ThunkAction<void, RootState, void, Action> => (dispatch, _) => {
  dispatch(actions.increment())
}

export const decrement = (): ThunkAction<void, RootState, void, Action> => (dispatch, _) => {
  dispatch(actions.decrement())
}
