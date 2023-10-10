'use client';
import { useState, useEffect } from 'react';
import ApiClient from '../ApiClient/client';
import UIMessage from '@/components/typography/UIMessage';

export default function Home() {
  const [suggestion, setSuggestion] = useState(null);
  const [isUIMessage, setIsUIMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [weather, setWeather] = useState({});

  // instantiate new ApiClient
  const apiClient = new ApiClient();

  const getData = async () => {
    try {
      // const response = await apiClient.getWeather();        setWeather(
      //     // response.data
      //     // {
      //   )`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.WEATHER_KEY}`
      //   // `https://api.openweathermap.org/data/2.5/weather?q=sheffield=${process.env.WEATHER_KEY}`
      // );

      // get response from apiclient

      const response = await apiClient.getWeather();

      console.log(response);

      // console.log(response)

      // depending on response format, we set our state

      setSuccessMessage('success!!!!!!');
      // setSuggestion(data.data);
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
        {suggestion?.activity}
        <button className='btn btn-primary'>Primary</button>
      </main>
    </>
  );
}
