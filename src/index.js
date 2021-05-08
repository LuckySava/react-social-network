import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {
      id: 1,
      message: 'Hi, how are you',
      likesCounter: 15,
  },
  {
      id: 2,
      message: 'it\'s my first post here',
      likesCounter: 42,
  },
  {
      id: 31,
      message: 'whorray',
      likesCounter: 8,
  },
  {
      id: 2,
      message: 'yeap!!!',
      likesCounter: 37,
  },
];

let messages = [
  {
      id: 1,
      message: 'Hi hello bro'
  },
  {
      id: 2,
      message: 'Hi there'
  },
  {
      id: 3,
      message: 'How are you'
  },
  {
      id: 4,
      message: 'Yo men'
  },

  {
      id: 5,
      message: 'Wow normal like'
  },

  {
      id: 6,
      message: 'what\s going on?'
  }
];


let dialogs = [
  {
      id: 1,
      name: 'Dimych'
  },
  {
      id: 2,
      name: 'Olga'
  },
  {
      id: 3,
      name: 'Ira'
  },
  {
      id: 4,
      name: 'Sveta'
  },
  {
      id: 5,
      name: 'Valera'
  },
  {
      id: 6,
      name: 'Lana'
  }
];



ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
