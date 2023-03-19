import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../features/formSlice';
import { FaTimes } from 'react-icons/fa';
import { setData } from '../features/deleteSlice';
import FormRow from './FormRow';
import { useState } from 'react';

const Form = ({ selectedRow }) => {
  const { isModalOpen } = useSelector((state) => state.modal);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const selectedData = data[selectedRow];

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
  };

  if (!isModalOpen) {
    return null;
  }
  return (
    <div
      className={`${
        isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3 className='title'>Shipment details</h3>
        <form className='form' onSubmit={handleUpdate}>
          <FormRow
            type='text'
            name='orderNo'
            value={selectedData?.orderNo}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='date'
            value={selectedData?.date}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='customer'
            value={selectedData?.customer}
            handleChange={handleChange}
          />
          <FormRow
            type='string'
            name='trackingNo'
            value={selectedData?.trackingNo}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='status'
            value={selectedData?.status}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='consignee'
            value={selectedData?.consignee}
            handleChange={handleChange}
          />
          <button
            className='close-modal-btn'
            onClick={() => dispatch(toggleModal())}
          >
            <FaTimes />
          </button>
          <button className='btn' type='submit'>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

// The Form component displays a form with input fields for each property of a shipment object. The input fields are pre-filled with the current values of the selected shipment object.
