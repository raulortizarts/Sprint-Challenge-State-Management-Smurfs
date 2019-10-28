import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
    return (
      <Fragment>
        <SearchBar />
      </Fragment>
    );
  }


export default App;
