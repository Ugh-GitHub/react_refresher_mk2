import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as withRouter } from 'react-router-dom';

class About extends Component {
  
    render() {
      return (
        
          <div>
            
          </div>
        
      );
    }
    
  }
  
  const putReduxStateOnProps = (reduxState) => ({reduxState});
  
  const AboutWithRouter = withRouter(About);
  export default connect(putReduxStateOnProps)(AboutWithRouter);