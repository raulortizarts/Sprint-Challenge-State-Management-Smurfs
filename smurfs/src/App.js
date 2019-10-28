import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Bio from './components/bios/Bio';
import "./App.css";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
    return (
      <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <Bio />
        </div>
      </Fragment>
      </ Provider>
    );
  }


export default App;
