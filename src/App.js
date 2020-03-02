import React from 'react';
import { Route } from 'react-router-dom'
import { PrivateRoute } from './utils/PrivateRoute'

import LandingPage from './components/LandingPage'
import Login from './components/Login'
import SignUp from './components/SignUp'
import PostOrSave from './components/PostOrSave'
import SavedPosts from './components/SavedPosts'
import PostForm from './components/PostForm'
import Post from './components/Post';

function App() {
   return (
      <div className="App">
         <Route exact path='/' component={LandingPage} />
         <Route path='/login' component={Login} />
         <Route path='/sign-up' component={SignUp} />

         <PrivateRoute exact path='/home' component={PostOrSave} />
         <PrivateRoute exact path='/posts' component={SavedPosts} />
         <PrivateRoute exact path='/analyze' component={PostForm} />
         <PrivateRoute exact path='/posts/:id' component={Post} />
      </div>
   );
}

export default App;
