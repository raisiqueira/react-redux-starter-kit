import { createAction } from 'redux-actions'
import axios from 'axios'

export const fetchList = createAction('FETCH_LIST')
export const fetchListError = createAction('FETCH_LIST_ERROR')
export const fetchListSuccess = createAction('FETCH_LIST_SUCCESS')

export const getListData = () => {
  return dispatch => {
    dispatch(fetchList())
    axios.get( 'https://jsonplaceholder.typicode.com/posts' )
      .then(response => dispatch(fetchListSuccess(response)))
      .catch(error => dispatch(fetchListError(error)))
  }
}
