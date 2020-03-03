import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../actions/loginActions'

const PostOrSave = ({ logout }) => {

   return (
      <div>
         Post / Save
         <Link to='/login'><button onClick={logout} >Logout</button></Link>
      </div>
   );
}

export default connect(null, { logout })(PostOrSave);