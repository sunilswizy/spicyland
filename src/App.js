import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header/header.component';
import Homepage from './components/pages/Homepage/homepage.component'
import Shop from './components/Shop/shop.component'
import Contact from './components/Contact/contact.component';
import Search from './components/Search/search.component';
import SignUpForm from './components/Sign-up-form/sign-up-form.component';
import SignInForm from './components/Sign-in-form/sign-in-form.component';

import { Route, Redirect, Switch } from 'react-router-dom';

import { auth, createUserProfileDocument } from './components/pages/firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore'

const Menus = (props) => {
    const title = props.location.state
  return(
  <div>
    <h1>{title}</h1>
  </div>
)}


const App = () => {
  
  const [currentUser, setcurrentUser] = useState(null)

  useEffect(() => {
    let unSubscribe;
     const checkAuth = async () =>{
      unSubscribe =  onAuthStateChanged(auth, async userAuth => {
          if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth)

                onSnapshot(userRef, user => {
                  setcurrentUser({...user.data(), id: user.id})
                })
          }

          setcurrentUser(userAuth)

          })
      }
      checkAuth();

      return unSubscribe;
  }, [])

  return (
    <div>
      <Header profile={currentUser}/>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop}/>
          <Route path='/search' component={Search}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/signin' render={() => 
              currentUser ? 
               <Redirect to='/'/>
               :
              <SignInForm/>}/>
          <Route path='/signup' render={() => 
              currentUser ? 
               <Redirect to='/'/>
               :
              <SignUpForm/>}/>
          <Route path='/menu/:food' component={Menus} />
      </Switch> 
    </div>
  )
}

export default App;
