import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBio, setCurrent } from '../../actions/bioActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const BioItem = ({ bio, deleteBio, setCurrent }) => {
  const onDelete = () => {
    deleteBio(bio.id);
    M.toast({ html: 'Bio Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-bio-modal'
          className={`modal-trigger ${
            bio.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(bio)}
        >
          {bio.biography}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>Item #{bio.id}</span> last updated by{' '}
          <span className='black-text'>{bio.smurf}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{bio.date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

BioItem.propTypes = {
  bio: PropTypes.object.isRequired,
  deleteBio: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteBio, setCurrent }
)(BioItem);
