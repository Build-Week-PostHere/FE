import {
   REGISTER,
   REGISTER_SUCCESS,
   REGISTER_FAIL,
   LOGIN,
   LOGIN_SUCCESS,
   LOGIN_FAIL,
   LOGOUT,
   FIRST
} from '../actions/loginActions'

const initialState = {
   isFetching: false,
   user: {},
   id: 0,
   token: '',
   error: '',
   regiError: '',
   first: false
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
            error: '',
            regiError: false,
            first: true
         }
      case REGISTER_FAIL:
         return {
            ...state,
            isFetching: false,
            regiError: true
         }
      case LOGIN:
         return {
            ...state,
            isFetching: true
         }
      case LOGIN_SUCCESS:
         window.localStorage.setItem('id', action.payload.id)
         window.localStorage.setItem('token', action.payload.token)
         window.localStorage.setItem('tokenTwo', action.payload.token)
         return {
            ...state,
            id: action.payload.id,
            token: action.payload.token,
            isFetching: false,
            error: '',
            regiError: false
         }
      case LOGIN_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case LOGOUT:
         window.localStorage.removeItem('id')
         window.localStorage.removeItem('token')
         window.localStorage.removeItem('tokenTwo')
         return {
            ...state
         }
      case FIRST:
         return {
            ...state,
            first: false
         }
      default:
         return state
   }
}