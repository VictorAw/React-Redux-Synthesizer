import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/notes.js';
import configureStore from "./store/store.js";
import Root from "./components/root";

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store} />,  document.getElementById('root'));

  window.store = store; // for debugging and testing
});
