import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'

import { toggleEdit, setPostToEdit } from '../actions/editActions'
import { deletePost, getSpecific } from '../actions/crudActions'

import Header from './Header'

const Post = ({ post, getSpecific, toggleEdit, setPostToEdit, deletePost }) => {
   const { post_title, post_text, post_sub_reddit } = post
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
      <div>
         <div className='home-header'>
            <Header />
         </div>
         <h1 className='post-h1'>Suggested Subreddit: <Link to={`/subreddit/${post_sub_reddit}`}>{post_sub_reddit}</Link></h1>
         <button className='post-btn' onClick={handleEdit} class='med-button'>Update Post</button>
         <button className='post-btn' onClick={handleDelete} class='small-button'>X</button>
         <h3 className='post-h3' >{post_title}</h3>
         <h4 className='post-h4' >{post_text}</h4>
      </div>
   );
}

const mapStateToProps = state => (
   {
      post: state.crudReducer.post
   }
)

export default connect(mapStateToProps, { getSpecific, toggleEdit, setPostToEdit, deletePost })(Post);