import * as Actions from '~/store/counter/types'

export const increment = () => ({
  type: Actions.Increment
})

export const decrement = () => ({
  type: Actions.Decrement
})

export type Action = ReturnType<typeof increment> | ReturnType<typeof decrement>
