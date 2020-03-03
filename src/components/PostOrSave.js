import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/loginActions'

//Asset Imports
import AlienLogo from '../assets/AlienLogo';
import Logout from '../assets/Logout';
import analytics from '../assets/analytics.svg';
import save from '../assets/save.svg';

const PostOrSave = ({ logout }) => {

   return (
      <div>
         <div className='home-header'>
            <AlienLogo />
            <h1>/PostHere</h1>
         </div>
         <div className='saved-or-post-container'>
            <div className='saved-or-post-sub-container'>
               <h2>Analyze a Post</h2>
               <img src={analytics} alt='Analytics' />
               <p>Tell us what you want to post and we'll tell you where to post it.</p>
            </div>
            <div className='saved-or-post-sub-container'>
               <h2>View Saved Posts</h2>
               <img src={save} alt='Saved' />
               <p>Look back on posts you've already had analyzed.</p>
            </div>
         </div>
         <Link to='/analyze'><button >Analyze</button></Link>
         <Link to='/posts'><button >Saved</button></Link>
         <Logout onClick={logout}>Logout</Logout>
      </div>
   );
}

export default connect(null, { logout })(PostOrSave);