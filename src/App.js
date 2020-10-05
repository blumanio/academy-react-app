import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/layouts/Navbar";
import Signup from './components/Routes/Signup';
import Login from './components/Routes/Login';
import {Route, BrowserRouter} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navbar/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup }/>


      </div>
      

      </BrowserRouter>
    );
  }
}

export default App;
