import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom';
import Parse from 'parse'

Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
Parse.initialize(
  'rrUtFgdRGisGsUNEqnaAHPJ4DMU2iWwY3p7s73oH', // This is your Application ID
  'S5hggRsu9jmyM7Bxkd5znt7u2W1H86PGs1OvYRda' // This is your Javascript key
);

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
