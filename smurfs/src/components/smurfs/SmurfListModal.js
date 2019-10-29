import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SmurfItem from './SmurfItem';
import { getSmurfs } from '../../actions/smurfActions';

const SmurfListModal = ({ getSmurfs, smurf: { smurfs, loading } }) => {
  useEffect(() => {
    getSmurfs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='smurf-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Smurf List</h4>
        <ul className='collection'>
          {!loading &&
            smurfs !== null &&
            smurfs.map(smurf => <SmurfItem smurf={smurf} key={smurf.id} />)}
        </ul>
      </div>
    </div>
  );
};

SmurfListModal.propTypes = {
  smurf: PropTypes.object.isRequired,
  getSmurfs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  smurf: state.smurf
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfListModal);