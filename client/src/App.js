import React from 'react'
import "./App.css";
import {Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
        <Navbar/>
       <Route exact path="/">
       <Home/>
       </Route>
   
      <Route path="/dashboard">
       <Dashboard/>
      </Route>
    </div>
  )
}
export default App

