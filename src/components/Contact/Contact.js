import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as withRouter } from 'react-router-dom';

class Contact extends Component {
  
    render() {
      return (
        
          <div>
            
          </div>
        
      );
    }
    
  }
  
  const putReduxStateOnProps = (reduxState) => ({reduxState});
  
  const ContactWithRouter = withRouter(Contact);
  export default connect(putReduxStateOnProps)(ContactWithRouter);