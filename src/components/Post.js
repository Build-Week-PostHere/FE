import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';

import { toggleEdit, setPostToEdit } from '../actions/editActions'
import { deletePost, getSpecific } from '../actions/crudActions'

const Post = ({ post, getSpecific, toggleEdit, setPostToEdit, deletePost }) => {
   const { post_title, post_text } = post
   const id = useParams().id
   const history = useHistory()
   const [subreddit, setSubreddit] = useState('all');
   const [subredditData, setSubredditData] = useState([])


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

   useEffect(() => {
      axios.get(`https://www.reddit.com/r/${subreddit}/top.json?nsfw=0&sort=top&t=day`)
      .then(res => {
         setSubredditData(res.data.data.children[0].data)
      })
      .catch(err => console.log(err));
   }, [subreddit])


   return (
      <div>
         <button onClick={handleEdit}>Update Post</button>
         <button onClick={handleDelete}>X</button>
         <h3>{post_title}</h3>
         <h4>{post_text}</h4>
         <p>
            The top post in r/{subreddit} in the past 24 hours is titled: {subredditData.title}<br/>
            See if your post can beat it.
         </p>
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