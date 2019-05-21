import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '~/store'
import { decrement, increment } from '~/store/counter/operations'

import TopTemplate from '~/components/templates/TopTemplate'

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count
})

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, void, Action>
) => ({
  onDecrementClick: () => {
    dispatch(decrement())
  },
  onIncrementClick: () => {
    dispatch(increment())
  }
})

const Top = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTemplate)

export default Top
