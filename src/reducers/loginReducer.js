import {
   REGISTER,
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   LOGIN,
   LOGIN_SUCCESS,
   LOGIN_FAIL
} from '../actions/loginActions'

const initialState = {
   isFetching: false,
   token: '',
   error: '',
   registerError: ''
}

export const loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case REGISTER:
         return {
            ...state,
            isFetching: true
         }
      case REGISTER_SUCCESS:
         return {
            ...state,
            isFetching: false,
            error: ''
         }
      case REGISTER_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case LOGIN:
         return {
            ...state,
            isFetching: true
         }
      case LOGIN_SUCCESS:
         window.localStorage.setItem('token', action.payload)
         return {
            ...state,
            isFetching: false,
            error: ''
         }
      case LOGIN_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      default:
         return state
   }
}