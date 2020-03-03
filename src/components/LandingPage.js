import React from 'react';
import { Link } from 'react-router-dom'

//Asset Imports
import AlienLogo from '../assets/AlienLogo';
import AlienOverlay from '../assets/AlienOverlay';

const LandingPage = () => {
   return (
      <div>
         <div className='landing-header'>
            <AlienLogo />
            <h1>/PostHere</h1>
         </div>
         <div className='landing-CTA'>
            <h2>Reach The Right People</h2>
            <h3>Use Machine Learning To Find The Right Subreddit For Your Post</h3>
            <AlienOverlay />
         </div>
         <div className='landing-buttons'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/register'><button>Register</button></Link>
         </div>
      </div>
   );
}

export default LandingPage;