import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteSmurf } from '../../actions/smurfActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const SmurfItem = ({ smurf: { id, firstName, lastName }, deleteSmurf }) => {
  const onDelete = () => {
    deleteSmurf(id);
    M.toast({ html: 'Smurf deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

SmurfItem.propTypes = {
  smurf: PropTypes.object.isRequired,
  deleteSmurf: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteSmurf }
)(SmurfItem);