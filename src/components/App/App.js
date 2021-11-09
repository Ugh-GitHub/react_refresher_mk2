import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
          <Routes>
            <Route path='/' element={<MovieList />}/>
            {/* Might need to update component={MovieList} to element={<MovieList />} */}
            <Route path='/details/:id' element={<Details />}/>
            <Route path='/addmovie' element={<AddMovie />}/>
          </Routes>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
