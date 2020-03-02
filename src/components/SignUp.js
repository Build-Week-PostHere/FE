import React, {useState} from 'react';

const SignUp = () => {
    const [member, setMember] = useState({email:'', password:'', confirmPass:''})

    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value})
    }

    return(
        <div className='login-container'>
            <h2>Sign Up</h2>
            <form>
                <input type='email' name='email' placeholder='Email' value={member.email} onChange={handleChange}/><br/>
                <input type='password' name='password' placeholder='Password' value={member.password} onChange={handleChange}/><br/>
                <input type='password' name='confirmPassword' placeholder='Confirm Password' value={member.confirmPass} onChange={handleChange}/><br/>
                <input type='submit' value='Sign Up'/>
            </form>
        </div>
    )
}

export default SignUp