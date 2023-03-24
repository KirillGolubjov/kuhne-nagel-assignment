import { RiDeleteBin2Line } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalWindow } from '../features/formSlice';
import { deleteRow } from '../features/dataSlice';
import PaginationBtn from './PaginationBtn';
import Form from './Form';

const FormData = ({ onRowClick, selectedRow }) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data.data);
  const dataPerPage = useSelector((store) => store.data.dataPerPage);
  const currentPage = useSelector((store) => store.data.currentPage);

  const totalPages = Math.ceil(data.length / dataPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;

  const visibleData = data.slice(indexOfFirstPage, indexOfLastPage);
  console.log(visibleData);

  const handleRowClick = (index) => {
    onRowClick(index);
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
      />
      <Form visibleData={visibleData} selectedRow={selectedRow} />
    </div>
  );
};
export default FormData;

// FormData: a component that displays the shipment data in a table and allows users to edit and delete individual shipments.
// The FormData component maps over the shipment data array to display each shipment in a table. Each row has an "Edit" button and a "Delete" button that dispatch the toggleModal action and deleteRow action, respectively, to show the Form component and delete the selected shipment from the data array.
