import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { addPost, editPost } from '../actions/crudActions'

const PostForm = () => {
   const [post, setPost] = useState({ title: '', body: '' });

   const handleChange = e => {
      setPost({ ...post, [e.target.name]: e.target.value });
   }

   const handleSubmit = e => {
      e.preventDefault()

   }

   return (
      <div>
         <form>
            <input type='text' name='title' placeholder='Write your title here.' value={post.title} onChange={handleChange} /><br />
            <textarea name='body' placeholder='Write your post here.' value={post.body} onChange={handleChange} /><br />
            <input type='submit' value='Submit Post' />
         </form>
      </div>
   );
}

export default connect()(PostForm);