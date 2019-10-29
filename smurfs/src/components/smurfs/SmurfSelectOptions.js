import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSmurfs } from '../../actions/smurfActions';

const SmurfSelectOptions = ({ getSmurfs, smurf: { smurfs, loading } }) => {
  useEffect(() => {
    getSmurfs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    smurfs !== null &&
    smurfs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

SmurfSelectOptions.propTypes = {
  smurf: PropTypes.object.isRequired,
  getSmurfs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  smurf: state.smurf
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfSelectOptions);