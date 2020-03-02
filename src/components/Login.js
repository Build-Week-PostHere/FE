import React, {useState} from 'react';

const SignUp = () => {
    const [member, setMember] = useState({email:'', password:''})

    const handleChange = event => {
        setMember({...member, [event.target.name]: event.target.value})
    }

    return(
        <div class='login-container'>
            <h2>Log In</h2>
            <form>
                <input type='email' name='email' placeholder='Email' value={email} onChange={handleChange}/>
                <input type='password' name='password' placeholder='Password' value={password} onChange={handleChange}/>
                <input type='submit'>Log In</input>
            </form>
        </div>
    )
}