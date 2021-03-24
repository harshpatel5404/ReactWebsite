import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </>
  )
}

export default App
