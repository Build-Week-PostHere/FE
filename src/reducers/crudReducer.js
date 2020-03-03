import {
   GET_POSTS,
   GET_SUCCESS,
   GET_FAIL,
   GET_SPECIFIC_POST,
   GET_SPECIFIC_SUCCESS,
   GET_SPECIFIC_FAIL,
   CRUD,
   CRUD_SUCCESS,
   CRUD_FAIL
} from '../actions/crudActions'

const initialState = {
   posts: [],
   post: {},
   isFetching: false,
   error: ''
}

export const crudReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_POSTS:
         return {
            ...state,
            isFetching: true
         }
      case GET_SUCCESS:
         return {
            ...state,
            posts: action.payload,
            isFetching: false,
            error: ''
         }
      case GET_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case GET_SPECIFIC_POST:
         return {
            ...state,
            isFetching: true
         }
      case GET_SPECIFIC_SUCCESS:
         return {
            ...state,
            post: action.payload,
            isFetching: false,
            error: ''
         }
      case GET_SPECIFIC_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case CRUD:
         return {
            ...state,
            isFetching: true
         }
      case CRUD_SUCCESS:
         return {
            ...state,
            isFetching: false,
            error: ''
         }
      case CRUD_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      default:
         return state
   }
}