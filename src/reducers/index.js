import { combineReducers } from 'redux'

import { loginReducer } from './loginReducer'
import { crudReducer } from './crudReducer'
import { editReducer } from './editReducer'

export const reducer = combineReducers({
   loginReducer,
   crudReducer,
   editReducer
})