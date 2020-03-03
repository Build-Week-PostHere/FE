import React from 'react';

const PostCard = ({ post }) => {
   const { post_title, post_text } = post
   return (
      <div>
         <h4>{post_title}</h4>
         <h5>{post_text}</h5>
      </div>
   );
}

export default PostCard;