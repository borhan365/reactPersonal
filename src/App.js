import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Blog from './Pages/Blog/Blog'
import Portpolio from './Pages/Portpolio/Portpolio'
import Single from './Pages/Single/Single'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Switch>      
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portpolio' component={Portpolio} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/single' component={Single} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
