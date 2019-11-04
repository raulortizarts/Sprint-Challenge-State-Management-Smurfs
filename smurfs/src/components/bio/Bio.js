import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import BioItem from './BioItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getBio } from '../../actions/bioActions';

const Bio = ({ bio: { bio, loading }, getBio }) => {
  useEffect(() => {
    getBio();
    // eslint-disable-next-line
  }, []);

  if (loading || bio === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Smurf Biography</h4>
      </li>
      {!loading && bio.length === 0 ? (
        <p className='center'>No bio to show...</p>
      ) : (
        bio.map(bio => <BioItem bio={bio} key={bio.id} />)
      )}
    </ul>
  );
};

Bio.propTypes = {
  bio: PropTypes.object.isRequired,
  getBio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bio: state.bio
});

export default connect(
  mapStateToProps,
  { getBio }
)(Bio);
