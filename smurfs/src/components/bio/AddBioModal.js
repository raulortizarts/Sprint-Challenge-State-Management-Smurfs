import React, { useState } from 'react';
import SmurfSelectOptions from '../smurfs/SmurfSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBio } from '../../actions/bioActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddBioModal = ({ addBio }) => {
  const [biography, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [smurf, setSmurf] = useState('');

  const onSubmit = () => {
    if (biography === '' || smurf === '') {
      M.toast({ html: 'Please enter a biography and smurf' });
    } else {
      const newBio = {
        biography,
        attention,
        smurf,
        date: new Date()
      };

      addBio(newBio);

      M.toast({ html: `Bio added by ${smurf}` });

      // Clear Fields
      setMessage('');
      setSmurf('');
      setAttention(false);
    }
  };

  return (
    <div id='add-bio-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Create Smurf Biography</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='biography'
              value={biography}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='biography' className='active'>
              Enter Biography
            </label>
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
                <span>Needs Review</span>
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

AddBioModal.propTypes = {
  addBio: PropTypes.func.isRequired
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(
  null,
  { addBio }
)(AddBioModal);
