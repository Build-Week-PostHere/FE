import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';

import { register } from '../actions/loginActions'

//Asset Imports
import alienLogo from '../assets/alienlogo.svg';
import backButton from '../assets/backButton.svg';

const SignUp = ({ register, isFetching, regiError }) => {
   const props = useSpring({ config: { duration: 2500 }, ...{ opacity: 1, from: { opacity: 0 } } })
   const [member, setMember] = useState({ username: '', password: '' })
   const [confirmPass, setConfirmPass] = useState('')
   const [passMatch, setPassMatch] = useState(false)
   const history = useHistory()

   const handleChange = e => {
      if (e.target.name !== 'confirmPass') {
         setMember({ ...member, [e.target.name]: e.target.value })
      } else {
         setConfirmPass(e.target.value)
      }
   }

   const handleSubmit = e => {
      e.preventDefault()
      setPassMatch(false)
      if (member.password === confirmPass) {
         register(member)
         history.push('/login')
         setPassMatch(false)
      } else {
         setPassMatch(true)
      }
   }

   const handleBack = e => {
      history.push('/')
   }

   return (
      <animated.div style={props}>
         <div>
            <div className='landing-header'>
               <img src={alienLogo} alt='Reddit Logo' />
               <h1>/PostHere</h1>
            </div>
            <div className='login-and-back-container'>
               <img className='back-btn' src={backButton} alt='Go Back' onClick={handleBack} />
               <div className='login-container signup-container'>
                  <h2>Sign Up</h2>
                  {passMatch ? <h3>Passwords Do Not Match</h3> : regiError ? <h3>Register Error, try with different credentials</h3> : isFetching ? <h3>Loading...</h3> : ''}
                  <form onSubmit={handleSubmit}>
                     <input type='username' name='username' placeholder='Username' value={member.username} onChange={handleChange} required /><br />
                     <input type='password' name='password' placeholder='Password' value={member.password} onChange={handleChange} required /><br />
                     <input type='password' name='confirmPass' placeholder='Confirm Password' value={confirmPass} onChange={handleChange} required /><br />
                     <input type='submit' value='Sign Up' />
                  </form>
               </div>
            </div>
         </div>
      </animated.div>
   )
}

const mapStateToProps = state => (
   {
      isFetching: state.loginReducer.isFetching,
      regiError: state.loginReducer.regiError
   }
)

export default connect(mapStateToProps, { register })(SignUp)