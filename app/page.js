'use client';
import { useState, useEffect } from 'react';
import ApiClient from '../ApiClient/client';
import UIMessage from '@/components/typography/UIMessage';
import AddLocation from '@/components/forms/AddLocation';

export default function Home() {
  const [isUIMessage, setIsUIMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [weather, setWeather] = useState({});

  // instantiate new ApiClient
  const apiClient = new ApiClient();
  <input
    type='text'
    placeholder='Type here'
    className='input w-full max-w-xs'
  />;

  const getData = async () => {
    try {
      const response = await apiClient.getWeather();
      console.log(response);
      setSuccessMessage('success!!!!!!');
    } catch (err) {
      setErrorMessage('ERRRRROOOOORRRRRRRRR');
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    // useEffect runs after the component is rendered
  }, []); //  empty array is a dependency array, it tells useEffect to only run once on page load
  // const [city, setCity] = useState('');
  // const [weather, setWeather] = useState({});
  // const [loading, setLoading] = useState(false);

  // const url = `https://api.openweathermap.org/data/2.5/weather?q=sheffield&appid=${process.env.WEATHER_KEY}}`;

  return (
    <>
      {errorMessage && <UIMessage messageType='error' message={errorMessage} />}
      {successMessage && (
        <UIMessage messageType='success' message={successMessage} />
      )}
      <main className='flex flex-col items-center justify-between p-24'>
        <h1 className='text-4xl font-bold'>Hello World</h1>
        <AddLocation />
      </main>
    </>
  );
}
