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
                <input type='email' name='email' placeholder='Email' value={email} onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password' value={password} onChange={handleChange}/>
                <input type='password' name='confirmPassword' placeholder='Confirm Password' value={confirmPass} onChange={handleChange}/>
                <input type='submit'>Sign Up</input>
            </form>
        </div>
    )
}