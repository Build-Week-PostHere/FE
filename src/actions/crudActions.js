import { axiosWithAuth } from '../utils/axiosWithAuth'

export const GET_POSTS = 'GET_POSTS'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAIL = 'GET_FAIL'

export const getPosts = user => dispatch => {
   dispatch({ type: GET_POSTS })
   axiosWithAuth()
      .get(`/user/${user.id}`)
}

export const CRUD_SUCCESS = 'CRUD_SUCCESS'
export const CRUD_FAIL = 'CRUD_FAIL'

export const ADD_POST = 'ADD_POST'
// export const ADD_SUCCESS = 'ADD_SUCCESS'
// export const ADD_FAIL = 'ADD_FAIL'

export const EDIT_POST = 'EDIT_POST'
// export const EDIT_SUCCESS = 'EDIT_SUCCESS'
// export const EDIT_FAIL = 'EDIT_FAIL'

export const DELETE_POST = 'DELETE_POST'
// export const DELETE_SUCCESS = 'DELETE_SUCCESS'
// export const DELETE_FAIL = 'DELETE_FAIL'