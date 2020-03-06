import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring';

import { login } from '../actions/loginActions'

//Component Imports
import Header from './Header';

//Asset Imports
import backButton from '../assets/backButton.svg'

const Login = ({ user, login, isFetching, error }) => {
   const props = useSpring({ config: { duration: 2500 }, ...{ opacity: 1, from: { opacity: 0 } } })
   const [member, setMember] = useState({ username: '', password: '' })
   const history = useHistory()

   useEffect(() => {
      if (user) {
         const { username, password } = user
         setMember({
            username: username,
            password: password
         })
      }
   }, [user])

   const handleChange = e => {
      setMember({ ...member, [e.target.name]: e.target.value })
   }

   const handleSubmit = e => {
      e.preventDefault()
      login(member)
      setTimeout(() => {
         history.push(`/home`)
      }, 1000)
   }

   const handleBack = e => {
      history.push('/');
   }

   return (
      <animated.div style={props}>
         <div>
            <Header />
            <div className='login-and-back-container'>
               <img className='back-btn' src={backButton} alt='Go Back' onClick={handleBack} />
               <div className='login-container'>
                  <h2>Log In</h2>
                  {isFetching ? <h3>Loading...</h3> : error ? <h3>Login Error, Please try again.</h3> : ''}
                  <form onSubmit={handleSubmit} >
                     <input className='input-1' type='username' name='username' placeholder='Username' value={member.username} onChange={handleChange} required />
                     <input className='input-1' type='password' name='password' placeholder='Password' value={member.password} onChange={handleChange} required />
                     <input className='input-2' type='submit' value='Log In' />
                  </form>
               </div>
            </div>
         </div>
      </animated.div>
   )
}

const mapStateToProps = state => (
   {
      user: state.loginReducer.user,
      isFetching: state.loginReducer.isFetching,
      error: state.loginReducer.error
   }
)

export default connect(mapStateToProps, { login })(Login);