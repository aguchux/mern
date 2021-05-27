import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StorageProvider} from './stores/Storage'

ReactDOM.render(
  <React.StrictMode>
    <StorageProvider>
    <App />
    </StorageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
