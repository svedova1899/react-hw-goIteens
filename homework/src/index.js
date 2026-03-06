import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Greeting from './hw/components/Greeting';
// import Messange from './hw/components/Messange';
// import Button from './hw/components/Button';
// import Profile from './hw/components-jsx/profile/User';
import User from './hw/components-jsx/profile/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Greeting/>
    <Messange/>
    <Button/> */}
    {/* <User/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
