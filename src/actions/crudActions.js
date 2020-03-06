import { axiosWithAuth } from '../utils/axiosWithAuth'

export const userId = () => {
   if (window.localStorage.getItem('id')) {
      return window.localStorage.getItem('id')
   }
}

export const GET_POSTS = 'GET_POSTS'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAIL = 'GET_FAIL'

export const getPosts = () => dispatch => {
   dispatch({ type: GET_POSTS })
   axiosWithAuth()
      .get(`/user/${userId()}`)
      .then(res => {
         console.log(res)
         dispatch({ type: GET_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: GET_FAIL, payload: err })
      })
}

export const GET_SPECIFIC_POST = 'GET_SPECIFIC_POST'
export const GET_SPECIFIC_SUCCESS = 'GET_SPECIFIC_SUCCESS'
export const GET_SPECIFIC_FAIL = 'GET_SPECIFIC_FAIL'

export const getSpecific = (id) => dispatch => {
   dispatch({ type: GET_SPECIFIC_POST })
   axiosWithAuth()
      .get(`/user/${userId()}/post/${id}`)
      .then(res => {
         // console.log(res.data)
         dispatch({ type: GET_SPECIFIC_SUCCESS, payload: res.data.post[0] })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: GET_SPECIFIC_FAIL, payload: err })
      })
}

export const CRUD = 'CRUD'
export const CRUD_SUCCESS = 'CRUD_SUCCESS'
export const CRUD_FAIL = 'CRUD_FAIL'
export let newpostid

// export const ADD_POST = 'ADD_POST'
// export const ADD_SUCCESS = 'ADD_SUCCESS'
// export const ADD_FAIL = 'ADD_FAIL'

export const addPost = (post) => dispatch => {
   dispatch({ type: CRUD })
   axiosWithAuth()
      .post(`/user/${userId()}`, post)
      .then(res => {
         // console.log(res.data)
         newpostid = res.data.post_id
         dispatch({ type: CRUD_SUCCESS })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: CRUD_FAIL, payload: err })
      })
}

// export const EDIT_POST = 'EDIT_POST'
// export const EDIT_SUCCESS = 'EDIT_SUCCESS'
// export const EDIT_FAIL = 'EDIT_FAIL'

export const editPost = (post) => dispatch => {
   dispatch({ type: CRUD })
   axiosWithAuth()
      .put(`/user/${userId()}/post/${post.id}`, post)
      .then(res => {
         // console.log(res.data)
         newpostid = post.id
         dispatch({ type: CRUD_SUCCESS })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: CRUD_FAIL, payload: err })
      })
}

// export const DELETE_POST = 'DELETE_POST'
// export const DELETE_SUCCESS = 'DELETE_SUCCESS'
// export const DELETE_FAIL = 'DELETE_FAIL'

export const deletePost = (post) => dispatch => {
   dispatch({ type: CRUD })
   axiosWithAuth()
      .delete(`/user/${userId()}/post/${post.id}`)
      .then(res => {
         // console.log(res)
         dispatch({ type: CRUD_SUCCESS })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: CRUD_FAIL, payload: err })
      })
}