import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'

import { toggleEdit, setPostToEdit } from '../actions/editActions'
import { deletePost, getSpecific } from '../actions/crudActions'

import Header from './Header'

const Post = ({ post, getSpecific, toggleEdit, setPostToEdit, deletePost }) => {
   const { post_title, post_text, post_sub_reddit, dated } = post
   const id = useParams().id
   const history = useHistory()

   useEffect(() => {
      getSpecific(id)
   }, [])

   const handleEdit = e => {
      toggleEdit(true)
      setPostToEdit(post)
      history.push('/analyze')
   }

   const handleDelete = e => {
      deletePost(post)
      history.push('/posts')
   }

   return (
      <div className='post-div'>
         <div className='home-header'>
            <Header />
         </div>
         <h1 className='post-h1'>Suggested Subreddit: <Link to={`/subreddit/${post_sub_reddit}`}>{post_sub_reddit}</Link></h1>
         <div className='post-top-div'>
            <h3>{dated}</h3>
            <div className='post-btn-div'>
               <button className='post-btn' onClick={handleEdit} >Update Post</button>
               <button className='post-btn' onClick={handleDelete} >X</button>
            </div>
         </div>
         <div className='post-div1'><h3 >{post_title}</h3></div>
         <div className='post-div2'><h4 >{post_text}</h4></div>
      </div>
   );
}

const mapStateToProps = state => (
   {
      post: state.crudReducer.post
   }
)

export default connect(mapStateToProps, { getSpecific, toggleEdit, setPostToEdit, deletePost })(Post);