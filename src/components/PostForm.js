import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { addPost, editPost, newpostid } from '../actions/crudActions'
import { toggleEdit } from '../actions/editActions'
import { useSpring, animated } from 'react-spring';

import backButton from '../assets/backButton.svg'

const PostForm = ({ addPost, editPost, isEditing, postToEdit, error, isFetching }) => {
   const props = useSpring({ config: { duration: 1000 }, ...{ opacity: 1, from: { opacity: 0 } } })
   const [post, setPost] = useState({
      post_title: '',
      post_text: ''
   });
   const history = useHistory()
   const [analyzing, setAnalyze] = useState(false)

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
      if (post.post_title.length < 5) {
         e.preventDefault();
         alert(`Post title is only ${post.post_title.length} characters. It must be at least 5 characters.`)
      }
      if (isEditing === false) {
         addPost(post)
      } else {
         editPost(post)
         toggleEdit(false)
      }
      setAnalyze(true)
      setTimeout(() => {
         setAnalyze(false)
         if (newpostid) {
            history.push(`/posts/${newpostid}`)
         } else {
            history.push(`/posts`)
         }
      }, 5000)
   }

   const handleBack = e => {
      history.push('/home');
   }

   return (
      <animated.div style={props}>
         <div className='form-and-back-container'>
            <img className='back-btn' src={backButton} alt='Go Back' onClick={handleBack} />
            <div className='login-container analyze-div'>
               {analyzing ? <h1>Analyzing...</h1> :
                  <div>
                     <h2 className='center-text'>Your Post</h2>
                     <form onSubmit={handleSubmit} >
                        {error ? <h2>Submission Error</h2> : ''}
                        <input type='text' name='post_title' placeholder='Write your title here.' value={post.post_title} onChange={handleChange} required /><br />
                        <textarea name='post_text' placeholder='Write your post here.' cols='50' rows='10' value={post.post_text} onChange={handleChange} required /><br />
                        <input type='submit' value={isEditing ? 'Edit Post' : 'Submit Post'} />
                     </form>
                  </div>
               }
            </div>
         </div>
      </animated.div>
   );
}

const mapStateToProps = state => (
   {
      isEditing: state.editReducer.isEditing,
      postToEdit: state.editReducer.postToEdit,
      isFetching: state.crudReducer.isFetching,
      error: state.crudReducer.error
   }
)

export default connect(mapStateToProps, { addPost, editPost })(PostForm);