import { actionCreatorFactory } from 'typescript-fsa'

const actionCreator = actionCreatorFactory('app/counter/')

const actions = {
  decrement: actionCreator<void>('decrement'),
  increment: actionCreator<void>('increment')
}

export default actions
