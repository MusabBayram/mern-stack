import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

const topla = () => {
  return{
    type: 'TOPLA'
  }
}

const cikar = () => {
  return{
    type:'CIKAR'
  }
}

const hesapla = (state=0, action) => {
  switch (action.type) {
    case 'TOPLA':      
      return state+1;
    case 'CIKAR':      
      return state-1;
  }
}

let store = createStore(hesapla)

store.subscribe(()=> console.log(store.getState()))

store.dispatch(topla())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
