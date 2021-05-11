import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost} from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderAllTree = (state) => {
  ReactDOM.render(
    <BrowserRouter >
      <React.StrictMode>
  
        <App state={state} addNewPost={addNewPost} />
  
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
