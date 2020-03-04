import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getPosts } from '../actions/crudActions'

import PostCard from './PostCard'
import Header from './Header'

const SavedPosts = ({ user, getPosts, posts, isFetching, error }) => {
   useEffect(() => {
      getPosts(user)
   }, [])

   return (
      <div>
         <div className='home-header'>
            <Header />
         </div>
         <h1>Your Posts</h1>
         {isFetching ? <h2>Loading...</h2> : error ? <h2>Encountered Error</h2> : posts ?
            posts.map(post => (
               <Link to={`/posts/${post.id}`}><PostCard key={post.id} post={post} /></Link>
            )) :
            <div>
               <h2>Add your first post!</h2>
               <Link to='/analyze'><button>Add Post</button></Link>
            </div>
         }
      </div>
   );
}

const mapStateToProps = state => (
   {
      user: state.loginReducer.user,
      posts: state.crudReducer.posts,
      isFetching: state.crudReducer.isFetching,
      error: state.crudReducer.error
   }
)

export default connect(mapStateToProps, { getPosts })(SavedPosts);