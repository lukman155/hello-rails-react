import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  const greetingData = useSelector((state) => state.greeting.data);

  return (
    <>
      <h2>Greetings</h2>
      <h1>{greetingData.greeting}</h1>
    </>
  );
}

export default Greeting;
