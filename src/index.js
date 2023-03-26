import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import NetflixRegister from './components/NetflixRegister';
import reportWebVitals from './reportWebVitals';
import NetflixHeader from './components/NetflixHeader';
import NetflixIndex from './components/NetflixIndex';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ReactDataBinding from './components/ReactDataBinding';
import DataTable from './components/Datatable';
import NestedComponents from './components/Nestedcomponents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactDataBinding></ReactDataBinding>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
