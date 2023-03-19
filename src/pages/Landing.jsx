import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../components/Form';
import FormData from '../components/FormData';
import { setData } from '../features/deleteSlice';

const Landing = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    axios
      .get('../../Shipments.txt')
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => console.error(error));
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'
  //     );
  //     dispatch(setData(response.data));
  //     return;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0'
        );
        dispatch(setData(response.data));
        return;
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <main className='container'>
      <Form selectedRow={selectedRow} />
      <FormData onRowClick={handleRowClick} />
    </main>
  );
};
export default Landing;

// The top-level component that fetches the shipment data from the text file and renders Form and FormData components.
