import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

//Component Imports
import Header from './Header';

//Asset Import
import alienOverlay from '../assets/alienoverlay.svg';


const LandingPage = () => {
   const props = useSpring({ config: { duration: 2500 }, ...{ opacity: 1, from: { opacity: 0 } } })
   return (
      <animated.div style={props}>
         <Header />
         <div className='landing-CTA'>
            <h2>Reach The Right People</h2>
            <h3>Use Machine Learning To Find The Right Subreddit For Your Post</h3>
            <img src={alienOverlay} alt='' />
         </div>
         <div className='landing-buttons'>
            <Link to='/login'><button className='land-btn'>Login</button></Link>
            <Link to='/register'><button className='land-btn'>Sign Up</button></Link>
            <a href='https://lambda-reddit-thingy.netlify.com'><button className='land-btn'>Learn More</button></a>
         </div>
      </animated.div>
   );
}

export default LandingPage;