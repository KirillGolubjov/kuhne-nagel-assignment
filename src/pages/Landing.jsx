import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../features/dataSlice';
import axios from 'axios';
import FormData from '../components/FormData';

const Landing = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .get('../../Shipments.txt')
  //     .then((response) => {
  //       dispatch(setData(response.data));
  //     })
  //     .catch((error) => console.error(error));
  // }, []);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className='container'>
      {/* <Form selectedRow={selectedRow} /> */}
      <FormData />
    </main>
  );
};
export default Landing;
