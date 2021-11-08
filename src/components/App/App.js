import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import About from '../About';
import Contact from '../Contact';
import Resume from '../Resume';
import Portfolio from '../Portfolio';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Peter Pierce Developer Site Demo</h1>
        </header>
        <br/>
        <Route exact path="/about" component={About} />
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/resume' component={Resume} /> 
        <Route exact path='/portfolio' component={Portfolio} />
      </div>
      </Router>
    );
  }
}

export default App;
