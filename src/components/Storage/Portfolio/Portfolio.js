import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as withRouter } from 'react-router-dom';

class Portfolio extends Component {
  
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
  
  const PortfolioWithRouter = withRouter(Portfolio);
//   export default connect(putReduxStateOnProps)(PortfolioWithRouter);
  export default connect()(PortfolioWithRouter);