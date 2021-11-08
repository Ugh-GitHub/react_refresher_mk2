import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

class App extends Component {
  // Renders the entire app on the DOM

  componentDidMount = () => {
    this.props.dispatch({type: "TEST_SAGAS"})
  }


  render() {
    return (
      <Router>
      <div className="App">
        <h1>Movies!</h1>
          {/* <Link to="/addmovie">Add a Movie!</Link> */}
          {/* ADD PAGES! */}
          
          <Route exact path='/' component={MovieList}/>
          <Route exact path='/details/:id' component={Details}/>
          <Route exact path='/addmovie' component={AddMovie}/>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
