import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

import { toggleEdit, setPostToEdit } from '../actions/editActions'
import { deletePost, getSpecific } from '../actions/crudActions'

const Post = ({ post, getSpecific, toggleEdit, setPostToEdit, deletePost }) => {
   const { post_title, post_text } = post
   const id = useParams().id
   const history = useHistory()

   useEffect(() => {
      console.log(id)
      getSpecific(id)
   }, [])

   const handleEdit = e => {
      toggleEdit(true)
      setPostToEdit(post)
      history.push('/analyze')
   }

   const handleDelete = e => {
      deletePost(post)
      history.push('/home')
   }

   return (
      <div>
         <button onClick={handleEdit}>Update Post</button>
         <button onClick={handleDelete}>X</button>
         <h3>{post_title}</h3>
         <h4>{post_text}</h4>
      </div>
   );
}

const mapStateToProps = state => (
   {
      user: state.loginReducer.user,
      post: state.crudReducer.post
   }
)

export default connect(mapStateToProps, { getSpecific, toggleEdit, setPostToEdit, deletePost })(Post);