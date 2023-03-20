import { useSelector, useDispatch } from 'react-redux';
import { toggleModalWindow } from '../features/formSlice';
import { FaTimes } from 'react-icons/fa';
import { setData } from '../features/deleteSlice';
import FormRow from './FormRow';

const Form = ({ selectedRow }) => {
  const { isModalOpen } = useSelector((store) => store.modal);
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();

  const selectedData = data[selectedRow];

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleFormUpdate = (e) => {
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
        <form className='form' onSubmit={handleFormUpdate}>
          <FormRow
            type='text'
            name='orderNo'
            value={selectedData?.orderNo}
            onChange={handleInputChange}
          />
          <FormRow
            type='text'
            name='date'
            value={selectedData?.date}
            onChange={handleInputChange}
          />
          <FormRow
            type='text'
            name='customer'
            value={selectedData?.customer}
            onChange={handleInputChange}
          />
          <FormRow
            type='string'
            name='trackingNo'
            value={selectedData?.trackingNo}
            onChange={handleInputChange}
          />
          <FormRow
            type='text'
            name='status'
            value={selectedData?.status}
            onChange={handleInputChange}
          />
          <FormRow
            type='text'
            name='consignee'
            value={selectedData?.consignee}
            onChange={handleInputChange}
          />
          <button
            className='close-modal-btn'
            onClick={() => dispatch(toggleModalWindow())}
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
