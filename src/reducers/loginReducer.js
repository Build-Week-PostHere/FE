import {
   REGISTER,
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   LOGIN,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT
} from '../actions/loginActions'

const initialState = {
   isFetching: false,
   user: {},
   id: 0,
   token: '',
   error: ''
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
            user: action.payload,
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
         window.localStorage.setItem('token', action.payload.token)
         return {
            ...state,
            id: action.payload.id,
            token: action.payload.token,
            isFetching: false,
            error: ''
         }
      case LOGIN_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case LOGOUT:
         window.localStorage.removeItem('token')
         return {
            ...state
         }
      default:
         return state
   }
}