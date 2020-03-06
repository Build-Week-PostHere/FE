import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

import { useSpring, animated } from 'react-spring';
import { getSubreddit } from '../actions/subredditActions'

import backButton from '../assets/backButton.svg'

const Subreddit = ({ getSubreddit, subreddit, subredditData, isFetching, error }) => {
   const props = useSpring({ config: { duration: 1000 }, ...{ opacity: 1, from: { opacity: 0 } } })
   // const [subreddit, setSubreddit] = useState('all');
   // const [subredditData, setSubredditData] = useState([])

   // useEffect(() => {
   //    axios.get(`https://www.reddit.com/r/${subreddit}/top.json?nsfw=0&sort=top&t=day`)
   //       .then(res => {
   //          setSubredditData(res.data.data.children[0].data)
   //       })
   //       .catch(err => console.log(err));
   // }, [subreddit])
   const history = useHistory()
   const name = useParams()

   useEffect(() => {
      getSubreddit(name)
   }, [])

   const handleBack = e => {
      history.pop();
   }

   return (
      <animated.div style={props}>
         <div>
            <img className='back-btn' src={backButton} alt='Go Back' onClick={handleBack} />
            {isFetching ? <h2>Loading...</h2> : error ? <h2>Encountered Error</h2> :
               <p>
                  The top post in r/{subreddit} in the past 24 hours is titled: {/* subredditData[0].data.title */} <br />
                  See if your post can beat it.
            </p>
            }
         </div>
      </animated.div>
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