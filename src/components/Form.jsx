import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../features/formSlice';
import { FaTimes } from 'react-icons/fa';
import { setData, updateData } from '../features/deleteSlice';
import FormRow from './FormRow';
import { useState } from 'react';

const Form = () => {
  const { isModalOpen } = useSelector((state) => state.modal);
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [newData, setNewData] = useState({
    orderNo: data.orderNo || '',
    date: data.date || '',
    customer: data.customer || '',
    trackingNo: data.trackingNo || '',
    status: data.status || '',
    consignee: data.consignee || '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(updateData({ ...newData, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const { orderNo, date, customer, trackingNo, status, consignee } = newData;
    if ((!orderNo, !date, !customer, !trackingNo, !status, !consignee))
      return alert('please fill out');
    dispatch(setData(data));
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
            type='string'
            name='orderNo'
            value={data.orderNo}
            handleChange={handleChange}
          />
          <FormRow
            type='date'
            name='date'
            value={data.date}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='customer'
            value={data.customer}
            handleChange={handleChange}
          />
          <FormRow
            type='string'
            name='trackingNo'
            value={data.trackingNo}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='status'
            value={data.status}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='consignee'
            value={data.consignee}
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
