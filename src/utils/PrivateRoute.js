import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
   const token = window.localStorage.getItem('token')
   const tokenTwo = window.localStorage.getItem('tokenTwo')
   return (
      <Route
         {...rest}
         render={props => {
            if (token === tokenTwo) {
               return <Component {...props} />
            } else {
               return <Redirect to='/login' />
            }
         }}
      />
   )
}

const mapStateToProps = state => (
   {
      id: state.loginReducer.id,
      token: state.loginReducer.token
   }
)

export default connect(mapStateToProps, {})(PrivateRoute);