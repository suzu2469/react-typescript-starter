import { connect } from 'react-redux'
import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { RootState } from '~/store'

import NotFoundTemplate from '~/components/templates/NotFoundTemplate'

const mapStateToProps = (_: RootState) => ({})

const mapDispatchToProps = (_: ThunkDispatch<RootState, void, Action>) => ({})

const NotFound = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFoundTemplate)

export default NotFound
