import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import { getSubreddit } from '../actions/subredditActions'

const Subreddit = ({ getSubreddit, subreddit, subredditData, isFetching, error }) => {
   // const [subreddit, setSubreddit] = useState('all');
   // const [subredditData, setSubredditData] = useState([])

   // useEffect(() => {
   //    axios.get(`https://www.reddit.com/r/${subreddit}/top.json?nsfw=0&sort=top&t=day`)
   //       .then(res => {
   //          setSubredditData(res.data.data.children[0].data)
   //       })
   //       .catch(err => console.log(err));
   // }, [subreddit])

   const name = useParams()

   useEffect(() => {
      getSubreddit(name)
   }, [])

   return (
      <div>
         {isFetching ? <h2>Loading...</h2> : error ? <h2>Encountered Error</h2> :
            <p>
               The top post in r/{subreddit} in the past 24 hours is titled: {/* subredditData[0].data.title */} <br />
               See if your post can beat it.
            </p>
         }
      </div>
   );
}

const mapStateToProps = state => (
   {
      subreddit: state.subredditReducer.subreddit,
      subredditData: state.subredditReducer.subredditData,
      isFetching: state.subredditReducer.isFetching,
      error: state.subredditReducer.error
   }
)

export default connect(mapStateToProps, { getSubreddit })(Subreddit);