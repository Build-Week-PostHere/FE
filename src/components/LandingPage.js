import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring'; 

//Component Imports
import Header from './Header';

//Asset Import
import alienOverlay from '../assets/alienoverlay.svg';


const LandingPage = () => {
   const props = useSpring({config : {duration: 1000}, ...{opacity: 1, from: {opacity: 0}}})
   return (
      <animated.div style={props}>
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
      </animated.div>
   );
}

export default LandingPage;