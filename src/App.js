import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import { Contact } from './components/Contact'
import Error from './components/Error'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="portfolio" path="/portfolio" component={Portfolio} />
          <Route path="portfolio" path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
