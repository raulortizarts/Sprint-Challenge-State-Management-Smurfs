import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchBio } from '../../actions/bioActions';

const SearchBar = ({ searchBio }) => {
    const text = useRef('');
  
    const onChange = e => {
      searchBio(text.current.value);
    };

    return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Smurf..'
              ref={text}
              onChange={onChange}
              />
            <label className='label-icon' htmlfor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
    searchBio: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { searchBio }
  )(SearchBar);