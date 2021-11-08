import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Link, withRouter } from 'react-router-dom';
import Details from '../Details/Details';



class MovieItem extends Component {

  componentDidMount = () => {
    console.log("Heres the index number", this.props.index);
  }
  
  goToDetails = () => {
    // this.props.dispatch({type:'DETAIL_PAGE_CALL', payload: this.props.movie.id});
    // this.props.dispatch({type:'DETAIL_INFO_GET', payload: this.props.movie.id});
    this.props.history.push(`/details/${this.props.movie.id}`);
  }

  render() {
    return (
      
        <>
          
            <div class="cards">
              <div class="card">
                <img key={this.props.movie.id} src={this.props.movie.poster} alt={this.props.movie.title} onClick={this.goToDetails}/>
                <div class="container">
                  <h4><b>{this.props.movie.title}</b></h4>
                </div>
              </div>
            </div>
          
        </>
      
    );
  }
  
}

const putReduxStateOnProps = (reduxState) => ({reduxState});

const MovieItemWithRouter = withRouter(MovieItem);
export default connect(putReduxStateOnProps)(MovieItemWithRouter);