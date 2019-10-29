import React, { useState } from 'react';
import SmurfSelectOptions from '../smurfs/SmurfSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBio } from '../../actions/bioActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddBioModal = ({ addBio }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [smurf, setSmurf] = useState('');

  const onSubmit = () => {
    if (message === '' || smurf === '') {
      M.toast({ html: 'Please enter a bio message and smurf name' });
    } else {
      const newBio = {
        message,
        attention,
        smurf,
        date: new Date()
      };

      addBio(newBio);

      M.toast({ html: `Bio added by ${smurf}` });

      setMessage('');
      setSmurf('');
      setAttention(false);
    }
  };

  return (
    <div id='add-bio-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Bio</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Bio Message
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