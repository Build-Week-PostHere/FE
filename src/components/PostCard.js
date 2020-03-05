import React from 'react';

const PostCard = ({ post }) => {
   const { post_title, post_text, date } = post
   return (
      <div className='post-card'>
         <div className='post-card-div1'>
            <h4>{date}</h4>
            <h4>{post_title}</h4>
         </div>
         <div className='post-card-div2'><h5>{post_text}</h5></div>
      </div>
   );
}

export default PostCard;