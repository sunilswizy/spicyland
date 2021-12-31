import React from 'react';
import './App.css';

import Header from './components/Header/header.component';
import Homepage from './components/pages/Homepage/homepage.component'
import Shop from './components/Shop/shop.component'
import Review from './components/Review/review.componet';
import Contact from './components/Contact/contact.component';
import SignInOut from './components/Sign-in-out/sign-in-out.component';

import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


class App extends React.Component {

   constructor() {
     super()
     this.state = {
       loginAuth: null
     }
   }

  componentDidMount() {
      if(localStorage.getItem('loginAuth')) {
        const data = JSON.parse(localStorage.getItem('loginAuth'))
        this.setState({loginAuth: data})
      }
   }

  handleStorage =() => {
    const data = JSON.stringify(this.state.loginAuth)
    localStorage.setItem("loginAuth", data)
  }
  
  handleResponse = (response) => {
       this.setState({loginAuth: response.profileObj}, this.handleStorage)
  }

  handleLogout = (res) => {
    this.setState({loginAuth: res}, this.handleStorage)
  }
  
  render(){
    const { loginAuth } = this.state
  return (
    <div>
      <Header profile={loginAuth} />
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop}/>
          <Route path='/review' component={Review}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/signin' render={() => 
              loginAuth ? 
               <Redirect to='/'/>
               :
              <SignInOut 
                handleResponse={this.handleResponse} 
                handleLogout={this.handleLogout}
              />}/>
      </Switch> 
    </div>
  )
} 
}

export default App;
