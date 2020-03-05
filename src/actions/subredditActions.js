import axios from 'axios'

export const GET_SUBREDDIT = 'GET_SUBREDDIT'
export const GET_SUBREDDIT_SUCCESS = 'GET_SUBREDDIT_SUCCESS'
export const GET_SUBREDDIT_FAIL = 'GET_SUBREDDIT_FAIL'

export const getSubreddit = subreddit => dispatch => {
   dispatch({ type: GET_SUBREDDIT })
   console.log('hello world')
   axios.get(`https://www.reddit.com/r/${subreddit}/top.json?nsfw=0&sort=top&t=day`)
      .then(res => {
         // setSubredditData(res.data.data.children[0].data)
         console.log(res.data.data.children)
         dispatch({
            type: GET_SUBREDDIT_SUCCESS, payload: {
               data: res.data.data.children,
               title: subreddit
            }
         })
      })
      .catch(err => {
         console.log(err)
         dispatch({ type: GET_SUBREDDIT_FAIL, payload: err })
      });
}