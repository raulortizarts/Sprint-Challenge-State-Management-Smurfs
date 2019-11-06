import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Bio from './components/bio/Bio';
import AddBtn from './components/layout/AddBtn';
import AddBioModal from './components/bio/AddBioModal';
import EditBioModal from './components/bio/EditBioModal';
import AddSmurfModal from './components/smurfs/AddSmurfModal';
import SmurfListModal from './components/smurfs/SmurfListModal';
import { Provider } from 'react-redux';
import store from './store';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {

    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddBioModal />
          <EditBioModal />
          <AddSmurfModal />
          <SmurfListModal />
          <Bio />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
