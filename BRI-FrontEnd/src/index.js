import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

//import Table from './component/Table/Table';
import * as serviceWorker from './serviceWorker';

import Routers from './router/router';

class App extends Component {
  render() {
    return (
      <div>



      </div>
    );
  }

}

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
