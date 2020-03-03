import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import { login, register } from '../actions/loginActions'

//Asset Imports
import AlienLogo from '../assets/AlienLogo';
import BackButton from '../assets/BackButton';

const SignUp = ({ user, login, isFetching, error }) => {
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
      history.push(`/home`)
   }

   const handleBack = e => {
      history.push('/');
   }

   return (
      <div>
         <div className='landing-header'>
            <AlienLogo />
            <h1>/PostHere</h1>
         </div>
         <div className='login-and-back-container'>
            <div onClick={handleBack}>         
               <BackButton />
            </div>
            <div className='login-container'>
               <h2>Log In</h2>
               {isFetching ? <h3>Loading...</h3> : error ? <h3>Login Error, Please try again.</h3> : ''}
               <form onSubmit={handleSubmit} >
                  <input type='username' name='username' placeholder='Username' value={member.username} onChange={handleChange} />
                  <input type='password' name='password' placeholder='Password' value={member.password} onChange={handleChange} />
                  <input type='submit' value='Log In' />
               </form>
            </div>
         </div>
      </div>

   )
}

const mapStateToProps = state => (
   {
      user: state.loginReducer.user,
      isFetching: state.loginReducer.isFetching,
      error: state.loginReducer.error
   }
)

export default connect(mapStateToProps, { login, register })(SignUp);