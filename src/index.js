import reportWebVitals from './reportWebVitals';
// import { rerenderAllTree } from './render';
import { state, subscriber } from './Redux/state';
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


rerenderAllTree(state);

subscriber(rerenderAllTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
