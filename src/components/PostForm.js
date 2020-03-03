import React, {useState} from 'react';

const PostForm = () => {
   const [post, setPost] = useState({title:'', body:''});

   const handleChange = e => {
      setPost({...post, [e.target.name]: e.target.value});
   }

   return (
      <div className='login-container'>
         <form>
            <h2>Analyze Your Post</h2>
            <input type='text' name='title' placeholder='Write your title here.' value={post.title} onChange={handleChange}/><br/>
            <textarea name='body' placeholder='Write your post here.' cols='50' rows='10' value={post.body} onChange={handleChange} /><br/>
            <input type='submit' value='Submit Post' />
         </form>
      </div>
   );
}

export default PostForm;