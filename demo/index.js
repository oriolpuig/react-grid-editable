/* eslint-disable no-unused-vars */
// Dependencies
import React from 'react';
import { render } from 'react-dom';

// Components
import App from './App.jsx';

(() => {
  const app = document.getElementById('react-view');
  render(<App />, app);
})();
