import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { addPost, editPost } from '../actions/crudActions'
import { toggleEdit } from '../actions/editActions'

const PostForm = ({ addPost, editPost, isEditing, postToEdit, user, error, isFetching }) => {
   const [post, setPost] = useState({
      post_title: '',
      post_text: '',
   });
   const history = useHistory()

   useEffect(() => {
      if (isEditing === true) {
         setPost(postToEdit)
      }
   }, [isEditing])

   const handleChange = e => {
      setPost({ ...post, [e.target.name]: e.target.value });
   }

   const handleSubmit = e => {
      e.preventDefault()
      if (isEditing === false) {
         addPost(post)
         history.push(`/posts`)
      } else if (isEditing === true) {
         editPost(post)
         toggleEdit(false)
         history.push(`/posts/${post.id}`)
      }
   }

   return (
      <div className='login-container'>
         {isFetching ? <h1>Analyzing...</h1> :
            <form onSubmit={handleSubmit} >
               {error ? <h2>Submission Error</h2> : ''}
               <input type='text' name='post_title' placeholder='Write your title here.' value={post.post_title} onChange={handleChange} required /><br />
               <textarea name='post_text' placeholder='Write your post here.' cols='50' rows='10' value={post.post_text} onChange={handleChange} required /><br />
               <input type='submit' value={isEditing ? 'Edit Post' : 'Submit Post'} />
            </form>
         }
      </div>
   );
}

const mapStateToProps = state => (
   {
      user: state.loginReducer.user,
      isEditing: state.editReducer.isEditing,
      postToEdit: state.editReducer.postToEdit,
      isFetching: state.crudReducer.isFetching,
      error: state.crudReducer.error
   }
)

export default connect(mapStateToProps, { addPost, editPost })(PostForm);