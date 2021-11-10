import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Route } from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';



class MovieList extends Component {
  componentDidMount = () => {
      this.props.dispatch({type: 'GET_MOVIES'});
  }

  render() {
    return (
      
        <div>
          {/* {JSON.stringify(this.props.reduxState.movies)} */}
          {this.props.reduxState.movies.map((movie) => {
            // return <img key={movie.id} src={movie.poster} alt={movie.title} />
            return <MovieItem key={movie.id} movie={movie} index={this.props.reduxState.movies.findIndex(i => i == movie)} />
          })}
        </div>
      
    );
  }
  
}

const putReduxStateOnProps = (reduxState) => ({reduxState})

export default connect(putReduxStateOnProps)(MovieList);