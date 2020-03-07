import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useParams, useHistory, Link } from 'react-router-dom'

import { toggleEdit, setPostToEdit } from '../actions/editActions'
import { deletePost, getSpecific } from '../actions/crudActions'

import { useSpring, animated } from 'react-spring';

import Header from './Header'
import backButton from '../assets/backButton.svg'

const Post = ({ post, getSpecific, toggleEdit, setPostToEdit, deletePost }) => {
   const props = useSpring({ config: { duration: 1000 }, ...{ opacity: 1, from: { opacity: 0 } } })
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

   const handleBack = e => {
      history.push('/posts');
   }

   return (
      <animated.div style={props}>
         <div className='post-and-back'>
            <img className='back-btn' src={backButton} alt='Go Back' onClick={handleBack} />
            <div className='post-div'>
               <div className='home-header'>
                  <Header />
               </div>
               <h1 className='post-h1'>Suggested Subreddit: <Link className='post-link' to={`/subreddit/${post_sub_reddit}`}>r/{post_sub_reddit}</Link></h1>
               <div className='post-top-div'>
                  <h3>{dated}</h3>
                  <div className='post-btn-div'>
                     <button className='post-btn update-btn' onClick={handleEdit} >Update</button>
                     <button className='post-btn' onClick={handleDelete} >X</button>
                  </div>
               </div>
               <div className='post-div1'><h3 >{post_title}</h3></div>
               <div className='post-div2'><h4 >{post_text}</h4></div>
            </div>
         </div>
      </animated.div>
   );
}

const mapStateToProps = state => (
   {
      post: state.crudReducer.post
   }
)

export default connect(mapStateToProps, { getSpecific, toggleEdit, setPostToEdit, deletePost })(Post);