import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPosts } from '../actions/crudActions'

import { useSpring, animated } from 'react-spring';

import PostCard from './PostCard'
import Header from './Header'
import backButton from '../assets/backButton.svg'

const SavedPosts = ({ getPosts, posts, isFetching, error }) => {
   const props = useSpring({ config: { duration: 1000 }, ...{ opacity: 1, from: { opacity: 0 } } })
   useEffect(() => {
      getPosts()
      setTimeout(() => {
         if (!posts) {
            getPosts()
         }
      }, 7000)
   }, [])
   const history = useHistory()

   const handleBack = e => {
      history.push('/home');
   }

   return (
      <animated.div style={props}>
         <div className='saved-and-back'>
            <div className='home-header'>
               <Header />
            </div>
            <img className='back-btn' src={backButton} alt='Go Back' onClick={handleBack} />
            <div className='saved-div'>
               <h1 className='saved-h1'>Your Saved Posts</h1>
               <div className='saved-list'>
                  {isFetching ? <h2 className='saved-h2' >Loading...</h2> : error ? <h2 className='saved-h2' >Encountered Error</h2> : posts &&
                     posts.slice(0).reverse().map(post => (
                        <Link key={post.id} to={`/posts/${post.id}`}><PostCard post={post} /></Link>
                     ))
                  }
                  {isFetching ? '' : error ? '' : posts.length < 1 &&
                     <div className='no-saved'>
                        <h2 className='saved-h2' >Add your first post!</h2>
                        <h2 className='saved-h2' >Posts may take up to 10s to analyze.</h2>
                        <Link to='/analyze'><button className='saved-btn'>Add Post</button></Link>
                     </div>
                  }
               </div>
            </div>
         </div>
      </animated.div>
   );
}

const mapStateToProps = state => (
   {
      posts: state.crudReducer.posts,
      isFetching: state.crudReducer.isFetching,
      error: state.crudReducer.error
   }
)

export default connect(mapStateToProps, { getPosts })(SavedPosts);