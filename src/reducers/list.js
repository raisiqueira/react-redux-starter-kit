import { handleActions } from 'redux-actions'
import {fetchList, fetchListError, fetchListSuccess} from '../actions/list'
import {List, Map, fromJS} from 'immutable'

const initialState = Map({
  isFetching: false,
  hasFailed: false,
  hasSuccess: false,
  items: [],
})

export default handleActions({
  [fetchList]: (state, action) => {
    return state
      .set('isFetching', true)
  },
  [fetchListError]: (state, action) => {
    return state.set('isFetching', false)
      .set('hasFailed', fromJS(action.payload))
  },
  [fetchListSuccess]: (state, action) =>{
    return state.set('isFetching', false)
      .set('hasSuccess', true)
      .set('items', fromJS(action.payload.data))
  }
}, initialState)
