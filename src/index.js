import reportWebVitals from './reportWebVitals';
import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

export let rerenderAllTree = (state) => {

  ReactDOM.render(
    <BrowserRouter >
      <React.StrictMode>
  
        <App 
        state={state} 
        addNewPost={store.addNewPost.bind(store)} 
        updateNewPostText={store.updateNewPostText.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
        addNewMessage = {store.addNewMessage.bind(store)}
         />

  
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


rerenderAllTree(store.getState());

store.subscriber(rerenderAllTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
