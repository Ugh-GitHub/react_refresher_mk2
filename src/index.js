import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import logger from 'redux-logger';


// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const addToCartReducer = (state = [], action) => {
  
    switch(action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload];
      case 'REMOVE_FROM_CART':
        if (state.indexOf(action.payload) === -1) {
          console.log(state);
          return state;
          // Don't need this code, but bad things have happened without it when things weren't working
        }
        else {
          let array = [...state];
          array.splice(array.indexOf(action.payload),1);
          console.log(array);
          // return [state.splice(state.indexOf(action.payload),1)];
          return array;
        }
        
      default:
        return state;
    }
  }
  
const customerReducer = (state= [], action) => {
    switch(action.type) {
        case 'ADD_CUSTOMERINFO': 
            return [...state, action.payload];
        default:
            return state
    }
}

const pizzaTime = (state = [], action) => {
// console.log('in pizzaTime with', action.payload);
    switch(action.type) {
        case 'PIZZA_TIME':
            return state = [...action.payload]
        default:
            return state;
    }
}

const orderTotal = (state = 0, action) => {
    
  switch(action.type) {
    case 'ADD_TO_TOTAL':
      return Number(state + Number(action.payload).toFixed(2)/1).toFixed(2)*1;
    case 'REMOVE_FROM_TOTAL':
      return Number(state - Number(action.payload).toFixed(2)*1).toFixed(2)*1;
    case 'ZERO_TOTAL':
      state = 0;
      return state;
    default:
      return state;
  }
}
  
const storeInstance = createStore(
    combineReducers({
        addToCartReducer,
        pizzaTime,
        customerReducer,
        orderTotal
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

