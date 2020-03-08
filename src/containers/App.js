import React from 'react';
import Main from './Main';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App(props) {
  return (
    <Router>
      <Main {...props} />
    </Router>
  );
}