import { apiCall } from '../../services/api'
import { addError } from './errors';
import { LOAD_POSTS, REMOVE_POST } from '../actionTypes';

export const loadPosts = posts => ({
  type: LOAD_POSTS,
  posts
})

export const fetchPosts = () => {
  return dispatch => {
    return apiCall("GET", '/api/posts')
    .then(res => {
      dispatch(loadPosts(res));
    })
    .catch(err => {
      dispatch(addError(err.message))
    })
  }
}


export const newPost = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/users/${id}/posts`, { text })
  .then(res => {})
  .catch(err => dispatch(addError(err.message)))
}