import { handleActions } from 'redux-actions'
import {fetchList, fetchListError, fetchListSuccess} from '../actions/list'

const initialState = {
  isFetching: false,
  hasFailed: false,
  hasSuccess: false,
  items: [],
}

export default handleActions({
  [fetchList]: (state, action) => {
    return Object.assign({}, state, {
     isFetching: true,
     hasFailed: false,
     hasSuccess: false,
     items: []
   })
  },
  [fetchListError]: (state, action) => {
    return Object.assign({}, state, {
     isFetching: false,
     hasFailed: action.payload,
     hasSuccess: false,
     items: []
    })
  },
  [fetchListSuccess]: (state, action) =>{
    return Object.assign({}, state, {
     isFetching: false,
     hasFailed: false,
     hasSuccess: true,
     items: action.payload.data
    })
  }
}, initialState)
