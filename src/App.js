import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import { Contact } from './components/Contact'
import Error from './components/Error'
import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'
import { Footer } from './components/Footer'

function App() {
  return (
    <React.Fragment>

      <Layout>
      <NavigationBar className="navbar"/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
      </Layout>
    </React.Fragment>
  );
}

export default App;
