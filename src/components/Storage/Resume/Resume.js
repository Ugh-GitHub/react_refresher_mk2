import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as withRouter } from 'react-router-dom';

class Resume extends Component {
  
    render() {
      return (
        
          <div>
            <header className="App-header">
                <h2 className="Page-title">Contact</h2>
            </header>
          </div>
        
      );
    }
    
  }
  
//   const putReduxStateOnProps = (reduxState) => ({reduxState});
  
  const ResumeWithRouter = withRouter(Resume);
//   export default connect(putReduxStateOnProps)(ResumeWithRouter);
  export default connect()(ResumeWithRouter);