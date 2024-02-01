import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store }  from './DataStore/store';
import { Provider } from 'react-redux'
import Firetest from './Components/Firetest';
import View from './Components/FormPage/ViewPage/View';
import GetDatawithButton from './Components/GetDatawithButton';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
      <App />
      
      {/* <Firetest/> */}
      
    </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();   



