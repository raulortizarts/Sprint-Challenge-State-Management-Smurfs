import React, { useState, useEffect } from 'react';
import SmurfSelectOptions from '../smurfs/SmurfSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateBio } from '../../actions/bioActions';

const EditBioModal = ({ current, updateBio }) => {
  const [biography, setBiography] = useState('');
  const [attention, setAttention] = useState(false);
  const [smurf, setSmurf] = useState('');

  useEffect(() => {
    if (current) {
      setBiography(current.biography);
      setAttention(current.attention);
      setSmurf(current.smurf);
    }
  }, [current]);

  const onSubmit = () => {
    if (biography === '' || smurf === '') {
      M.toast({ html: 'Please enter smurf and biography' });
    } else {
      const updBio = {
        id: current.id,
        biography,
        attention,
        smurf,
        date: new Date()
      };

      updateBio(updBio);
      M.toast({ html: `Bio updated by ${smurf}` });

      // Clear Fields
      setBiography('');
      setSmurf('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-bio-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Smurf Biography</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='biography'
              value={biography}
              onChange={e => setBiography(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='smurf'
              value={smurf}
              className='browser-default'
              onChange={e => setSmurf(e.target.value)}
            >
              <option value='' disabled>
                Select Smurf
              </option>
              <SmurfSelectOptions />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

EditBioModal.propTypes = {
  current: PropTypes.object,
  updateBio: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.bio.current
});

export default connect(
  mapStateToProps,
  { updateBio }
)(EditBioModal);
