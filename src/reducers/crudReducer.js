import {
   GET_POSTS,
   GET_SUCCESS,
   GET_FAIL,
   CRUD_SUCCESS,
   CRUD_FAIL,
   ADD_POST,
   EDIT_POST,
   DELETE_POST
} from '../actions/crudActions'

const initialState = {
   posts: [],
   post: {},
   isFetching: false,
   error: ''
}

export const crudReducer = (state = initialState, action) => {
   switch (action.type) {
      default:
         return state
   }
}