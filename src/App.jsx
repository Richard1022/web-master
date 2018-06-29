import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              <Route path="/" component={Home} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
