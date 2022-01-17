import React from 'react';
import Icons from './Components/icons'

import 'bootstrap/dist/css/bootstrap.css';

import "./App.css"

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <Icons className="col-4"/>
        <div className="col">
          Column
        </div>
        <div className="col">
          Column
        </div>
      </div>
    </div>
  );
};

export default App;