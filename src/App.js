import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/header.component';
import Homepage from './components/pages/Homepage/homepage.component'
import Shop from './components/Shop/shop.component'
import Contact from './components/Contact/contact.component';
import SignInOut from './components/Sign-in-out/sign-in-out.component';
import Search from './components/Search/search.component';

import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { auth } from './components/pages/firebase/firebase.config';
import {  onAuthStateChanged, signOut } from 'firebase/auth';

const Menus = (props) => {
    const title = props.location.state
  return(
  <div>
    <h1>{title}</h1>
  </div>
)}


const App = () => {
  
  const [loginAuth, setLoginAuth] = useState(null)

  useEffect(() => {
    let unSubscribe;
     const checkAuth = async () =>{
      unSubscribe =  onAuthStateChanged(auth, user => {
              if(user) {
                setLoginAuth(user)
              }
              else{
                setLoginAuth(null)
              }
          })
      }
      checkAuth()
      return unSubscribe;
  }, [])

  const handleLogout = async () =>{
      await signOut(auth)
      setLoginAuth(null)
  }

  return (
    <div>
      <Header profile={loginAuth} handleLogout={handleLogout}/>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop}/>
          <Route path='/search' component={Search}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/signin' render={() => 
              loginAuth ? 
               <Redirect to='/'/>
               :
              <SignInOut 
                handleResponse={setLoginAuth} 
              />}/>
          <Route path='/menu/:food' component={Menus} />
      </Switch> 
    </div>
  )
}

export default App;
