import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/Items';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



// persist store code
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

const persistedState = loadState();

// This persistedState is includedat the time of store creation as initial value
const store = createStore(cartReducer, persistedState);

// This is actually call every time when store saved
store.subscribe(() => {
  saveState(store.getState());
});
//const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

