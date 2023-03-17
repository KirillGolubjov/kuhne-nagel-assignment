import { RiDeleteBin2Line } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRow } from '../features/deleteSlice';
import { toggleModal } from '../features/formSlice';

const FormData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  return (
    <div className='form-data'>
      <table className='form-table'>
        <thead>
          <tr className='form-table-thead'>
            <th>Order No</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Tracking No</th>
            <th>Status</th>
            <th>Consignee</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((item, index) => {
              const { orderNo, date, customer, trackingNo, status, consignee } =
                item;
              return (
                <tr key={index} className='form-table-tbody'>
                  <td>{orderNo}</td>
                  <td>{date}</td>
                  <td>{customer}</td>
                  <td>{trackingNo}</td>
                  <td>{status}</td>
                  <td>{consignee}</td>
                  <td>
                    <button
                      type='button'
                      className='btn'
                      onClick={() => dispatch(toggleModal())}
                    >
                      <RxUpdate />
                    </button>
                  </td>
                  <td>
                    <button
                      type='button'
                      className='btn'
                      onClick={() => dispatch(deleteRow(index))}
                    >
                      <RiDeleteBin2Line />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default FormData;
