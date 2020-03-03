import React, {useState} from 'react';

const PostForm = () => {
   const [post, setPost] = useState({title:'', body:''});

   const handleChange = e => {
      setPost({...post, [e.target.name]: e.target.value});
   }

   return (
      <div>
         <form>
            <input type='text' name='title' placeholder='Write your title here.' value={post.title} onChange={handleChange}/><br/>
            <textarea name='body' placeholder='Write your post here.' value={post.body} onChange={handleChange} /><br/>
            <input type='submit' value='Submit Post' />
         </form>
      </div>
   );
}

export default PostForm;