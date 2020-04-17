import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import { Contact } from './components/Contact'
import Error from './components/Error'

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="portfolio" path="/portfolio" component={Portfolio} />
          <Route path="portfolio" path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
