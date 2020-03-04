import React from 'react';
import { Link } from 'react-router-dom'

//Component Imports
import Header from './Header';

//Asset Import
import alienOverlay from '../assets/alienoverlay.svg';


const LandingPage = () => {
   return (
      <div>
         <Header />
         <div className='landing-CTA'>
            <h2>Reach The Right People</h2>
            <h3>Use Machine Learning To Find The Right Subreddit For Your Post</h3>
            <img src={alienOverlay} alt=''/>
         </div>
         <div className='landing-buttons'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/register'><button>Sign Up</button></Link>
            <Link to='/'><button>Learn More</button></Link>
         </div>
      </div>
   );
}

export default LandingPage;