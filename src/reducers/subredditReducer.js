import {
   GET_SUBREDDIT,
   GET_SUBREDDIT_SUCCESS,
   GET_SUBREDDIT_FAIL
} from '../actions/subredditActions'

const initialState = {
   subredditData: [],
   subreddit: '',
   isFetching: '',
   error: ''
}

export const subredditReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_SUBREDDIT:
         return {
            ...state,
            isFetching: true
         }
      case GET_SUBREDDIT_SUCCESS:
         return {
            ...state,
            isFetching: false,
            subreddit: action.payload.title,
            subredditData: action.payload.data,
            error: ''
         }
      case GET_SUBREDDIT_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      default:
         return state
   }
}