import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/loginActions'

//Component Imports
import Header from './Header';

//Asset Imports
import alienLogo from '../assets/alienlogo.svg';
import exit from '../assets/exit.svg'
import analytics from '../assets/analytics.svg';
import save from '../assets/save.svg';

import { useSpring, animated } from 'react-spring';

const PostOrSave = ({ logout }) => {
   const props = useSpring({ config: { duration: 1000 }, ...{ opacity: 1, from: { opacity: 0 } } })
   return (
      <animated.div style={props}>
         <div>
            <div className='home-header'>
               <Header />
            </div>
            <div className='saved-or-post-container'>
               <div className='saved-or-post-sub-container'>
                  <h2>Analyze a Post</h2>
                  <img src={analytics} alt='Analytics' />
                  <p>Tell us what you want to post and we'll tell you where to post it.</p>
                  <Link to='/analyze'>
                     <button className='inner-button'>
                        Analyze
                  </button>
                  </Link>
               </div>
               <div className='saved-or-post-sub-container'>
                  <h2>View Saved Posts</h2>
                  <img src={save} alt='Saved' />
                  <p>Look back on posts you've already had analyzed.</p>
                  <Link to='/posts'>
                     <button className='inner-button'>
                        Saved Posts
                  </button>
                  </Link>
               </div>
            </div>
            <Link to='/'>
               <button onClick={logout} className='logout-button'>
                  Log Out
               <img src={exit} alt='' />
               </button>
            </Link>
         </div>
      </animated.div>
   );
}

export default connect(null, { logout })(PostOrSave);