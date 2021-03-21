import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import JobExperiences from './components/Pages/JobExperiences';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
   <>
   <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/jobexperiences' component={JobExperiences} />
          <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
