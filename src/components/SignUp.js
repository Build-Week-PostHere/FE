import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { register } from '../actions/loginActions'

const SignUp = ({ register, isFetching, error }) => {
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

   return (
      <div className='login-container'>
         <h2>Sign Up</h2>
         {passMatch ? <h3>Passwords Do Not Match</h3> : error ? <h3>Register Error, try with different credentials</h3> : isFetching ? <h3>Loading...</h3> : ''}
         <form onSubmit={handleSubmit}>
            <input type='username' name='username' placeholder='Username' value={member.username} onChange={handleChange} /><br />
            <input type='password' name='password' placeholder='Password' value={member.password} onChange={handleChange} /><br />
            <input type='password' name='confirmPass' placeholder='Confirm Password' value={confirmPass} onChange={handleChange} /><br />
            <input type='submit' value='Sign Up' />
         </form>
      </div>
   )
}

const mapStateToProps = state => (
   {
      isFetching: state.loginReducer.isFetching,
      error: state.loginReducer.error
   }
)

export default connect(mapStateToProps, { register })(SignUp)