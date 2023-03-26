import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { updateData } from '../features/dataSlice';
import { toggleModalWindow } from '../features/formSlice';
import FormRow from './FormRow';

const Form = ({ visibleData }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((store) => store.modal.isModalOpen);
  const { dataPerPage, currentPage, selectedRow } = useSelector(
    (store) => store.data
  );

  const [selectedData, setSelectedData] = useState(visibleData[selectedRow]);

  const handleInputChange = (e) => {
    console.log('Handling input change');
    const name = e.target.name;
    const value = e.target.value;
    setSelectedData({ ...selectedData, [name]: value });
  };

  const handleFormUpdate = (e) => {
    e.preventDefault();
    console.log('Updating data: ', selectedData);
    const actualIndex = selectedRow + (currentPage - 1) * dataPerPage;
    dispatch(
      updateData({
        index: actualIndex,
        updatedRow: selectedData,
      })
    );
    setSelectedData(visibleData[selectedRow]);
    dispatch(toggleModalWindow());
  };

  useEffect(() => {
    setSelectedData(visibleData[selectedRow]);
  }, [selectedRow, visibleData]);

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
            value={selectedData?.orderNo || ''}
            handleInputChange={handleInputChange}
          />
          <FormRow
            type='text'
            name='date'
            value={selectedData?.date || ''}
            handleInputChange={handleInputChange}
          />
          <FormRow
            type='text'
            name='customer'
            value={selectedData?.customer || ''}
            handleInputChange={handleInputChange}
          />
          <FormRow
            type='string'
            name='trackingNo'
            value={selectedData?.trackingNo || ''}
            handleInputChange={handleInputChange}
          />
          <FormRow
            type='text'
            name='status'
            value={selectedData?.status || ''}
            handleInputChange={handleInputChange}
          />
          <FormRow
            type='text'
            name='consignee'
            value={selectedData?.consignee || ''}
            handleInputChange={handleInputChange}
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
