import { RootThunkAction } from '~/store'
import * as Actions from '~/store/counter/actions'

export const increment = (): RootThunkAction<void> => (dispatch, _getState) => {
  dispatch(Actions.increment())
}

export const decrement = (): RootThunkAction<void> => (dispatch, _getState) => {
  dispatch(Actions.decrement())
}
