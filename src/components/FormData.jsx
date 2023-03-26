import { RiDeleteBin2Line } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalWindow } from '../features/formSlice';
import { deleteRow, setSelectedRow } from '../features/dataSlice';
import PaginationBtn from './PaginationBtn';
import Form from './Form';

const FormData = () => {
  const dispatch = useDispatch();

  const { data, dataPerPage, currentPage } = useSelector((store) => store.data);

  const totalPages = Math.ceil(data.length / dataPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;

  const visibleData = data.slice(indexOfFirstPage, indexOfLastPage);

  const handleRowClick = (index) => {
    dispatch(setSelectedRow(index));
  };

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
          {Array.isArray(visibleData) &&
            visibleData.map((item, index) => {
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
                      onClick={() => {
                        dispatch(toggleModalWindow());
                        handleRowClick(index);
                      }}
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
      <PaginationBtn
        pages={pages}
        totalPages={totalPages}
        currentPage={currentPage}
        visibleData={visibleData}
      />
      <Form visibleData={visibleData} />
    </div>
  );
};
export default FormData;
