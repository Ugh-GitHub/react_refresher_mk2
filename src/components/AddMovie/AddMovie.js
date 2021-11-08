import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class AddMovie extends Component {
    state = {
        movieInfo: {
            title: '',
            description: '',
            genre_id: -1,
            poster: ''
        }
    }

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_GENRES'});
    }

    handleChange = (event, key) => {
        this.setState({
            movieInfo:{
                ...this.state.movieInfo,
          [key]: event.target.value
            }
        });
        // console.log(this.state.movieInfo);
      }

    submitNewMovie = () => {
        this.props.dispatch({type: 'SUBMIT_NEW_MOVIE', payload: this.state.movieInfo});
        this.props.history.push('/');
    }

    cancelNewMovie = () => {
        this.setState({
            movieInfo: {
                title: '',
                description: '',
                genre_id: '',
                poster: ''
            }
        });
        this.props.history.push('/');
    }


  render() {
    return (
      
        <div>
            <input type="text" placeholder="title"
                onChange={(event) => this.handleChange(event, 'title')}></input>
            <input type="text" placeholder="description" 
            onChange={(event) => this.handleChange(event, 'description')}></input>
            <input type="text" placeholder="poster" 
            onChange={(event) => this.handleChange(event, 'poster')}></input>
           <label for="cars">Choose a genre:</label>
            <select onChange={(event) => this.handleChange(event, 'genre_id')}>
                <option value=''></option>
                 {this.props.reduxState.genres.map((genre) => {
                     return <option value={genre.id}>{genre.name}</option>
                 })};
            </select>
            {this.state.movieInfo.title !== '' && this.state.movieInfo.description !== '' && 
            this.state.movieInfo.poster !== '' && this.state.movieInfo.genre_id !== '' ?
                <button onClick={this.submitNewMovie}>Save</button>
            :
                <button disabled>Save</button>
            }
            <button onClick={this.cancelNewMovie}>Cancel</button>
        </div>
      
    );
  }
  
}

const putReduxStateOnProps = (reduxState) => ({reduxState});

const AddMovieWithRouter = withRouter(AddMovie);
export default connect(putReduxStateOnProps)(AddMovieWithRouter);