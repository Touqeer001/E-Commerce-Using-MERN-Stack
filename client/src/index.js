import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './components/redux/store.js';
import App from './App'; 
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Provider store={store} >
    <React.StrictMode>
<App />
</React.StrictMode>
</Provider>
);
reportWebVitals();