import React from 'react';
import App from './components/App';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store/index.js';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);