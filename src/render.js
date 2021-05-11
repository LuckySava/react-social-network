import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, updateNewPostText, updateNewMessageText, addNewMessage} from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderAllTree = (state) => {

  ReactDOM.render(
    <BrowserRouter >
      <React.StrictMode>
  
        <App 
        state={state} 
        addNewPost={addNewPost} 
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
        addNewMessage = {addNewMessage}
         />

  
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
