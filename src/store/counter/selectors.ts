import { createSelector } from 'reselect'
import { RootState } from '~/store/index'

const counterSelector = (state: RootState) => state.counter
export const countSelector = (state: RootState) => state.counter.count

export const absoluteCountValueSelector = createSelector(
  counterSelector,
  counter => (counter.count <= 0 ? counter.count * -1 : counter.count)
)
