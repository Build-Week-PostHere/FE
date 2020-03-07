import { axiosWithAuth } from '../utils/axiosWithAuth'

export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export const register = user => dispatch => {
   dispatch({ type: REGISTER })
   axiosWithAuth()
      .post(`/auth/register`, user)
      .then(res => {
         console.log(res)
         dispatch({ type: REGISTER_SUCCESS, payload: user })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: REGISTER_FAIL, payload: err })
      })
}

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = user => dispatch => {
   dispatch({ type: LOGIN })
   axiosWithAuth()
      .post(`/auth/login`, user)
      .then(res => {
         console.log(res)
         dispatch({ type: LOGIN_SUCCESS, payload: res.data })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: LOGIN_FAIL, payload: err })
      })
}

export const LOGOUT = 'LOGOUT'

export const logout = e => {
   return {
      type: LOGOUT
   }
}

export const FIRST = 'FIRST'

export const setFirst = () => {
   return {
      type: FIRST
   }
}