import React from 'react';
import alienLogo from '../assets/alienlogo.svg'


const Header = () => {
    return (
        <div className='landing-header'>
            <img src={alienLogo} alt='Reddit Logo'/>
            <h1>/PostHere</h1>
        </div>
    )
}

export default Header;
