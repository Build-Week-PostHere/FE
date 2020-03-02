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
      default:
         return state
   }
}