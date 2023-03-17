import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../components/Form';
import FormData from '../components/FormData';
import { setData } from '../features/deleteSlice';

const Landing = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    axios
      .get('../../Shipments.txt')
      .then((response) => {
        dispatch(setData(response.data));
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(data);
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

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <main className='container'>
      <Form />
      <FormData data={data} />
    </main>
  );
};
export default Landing;
