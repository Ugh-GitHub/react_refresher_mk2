import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {
  // EVENTUALLY REPLACE THIS WITH '/details/${id}
  

  

  componentDidMount = () => {
    
    this.props.dispatch({type: 'DETAIL_INFO_GET', payload: this.props.match.params.id});
    this.props.dispatch({type: 'GET_ITEM_GENRE', payload: this.props.match.params.id});

  }

  


  backHome = () => {
    this.props.dispatch({type:'DETAIL_PAGE_CALL', payload: -1});
    this.props.history.push('/');
  }

  render() {
    return (
      
        <div>

          <img src={this.props.reduxState.details.poster} alt={this.props.reduxState.details.description}/>

          <h1>{this.props.reduxState.details.title}</h1>

          <h2>{this.props.reduxState.details.description}</h2>
          <h2>Genres: </h2>
          <h3>{this.props.reduxState.detailPageGenre.map((name) => {
                return <li>{name}  </li>
              })}</h3>

          <button onClick={this.backHome}>Home</button>
          
        </div>
      
    );
  }
  
}

const putReduxStateOnProps = (reduxState) => ({reduxState});


export default connect(putReduxStateOnProps)(Details);