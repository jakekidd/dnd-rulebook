import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// Fetch and pass the theme data to App props.
fetch(`${process.env.PUBLIC_URL}/theme.json`)
  .then(r => r.json())
  .then(themeData => {
      ReactDOM.render(<App theme={themeData}/>, document.getElementById('root'));
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
