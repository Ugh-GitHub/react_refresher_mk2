import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, 
  Routes, 
  Link, 
  useParams, 
  Route} from 'react-router-dom';
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
          
          <Link to='/'/>
          <Link to='/details/:id'/>
          <Link to='/addmovie'/>
          {/* <Link to='/' component={MovieList}/>
          <Link to='/details/:id' component={Details}/>
          <Link to='/addmovie' component={AddMovie}/> */}
        <Routes>
          <Route path="/:id" children={<Child />} />
        </Routes>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
