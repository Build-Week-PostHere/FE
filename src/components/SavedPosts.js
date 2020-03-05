import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPosts } from '../actions/crudActions'

import PostCard from './PostCard'
import Header from './Header'

const SavedPosts = ({ getPosts, posts, isFetching, error }) => {
   useEffect(() => {
      getPosts()
   }, [])

   return (
      <div>
         <div className='home-header'>
            <Header />
         </div>
         <h1 className='saved-h1'>Your Saved Posts</h1>
         <div className='saved-list'>
            {isFetching ? <h2 className='saved-h2' >Loading...</h2> : error ? <h2 className='saved-h2' >Encountered Error</h2> : posts &&
               posts.map(post => (
                  <Link key={post.id} to={`/posts/${post.id}`}><PostCard post={post} /></Link>
               ))
            }
            {posts.length < 1 &&
               <div className='no-saved'>
                  <h2 className='saved-h2' >Add your first post!</h2>
                  <Link to='/analyze'><button className='saved-button'>Add Post</button></Link>
               </div>
            }
         </div>
      </div>
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