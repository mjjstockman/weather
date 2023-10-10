'use client';
import axios from 'axios';

export class ApiClient {
  responseStatusCheck(responseObject) {
    if (responseObject.status >= 200 && responseObject.status < 300) {
      return Promise.resolve(responseObject);
    } else {
      return Promise.reject(new Error(responseObject.statusText));
    }
  }

  getRequest(url) {
    return axios
      .get(url)
      .then(this.responseStatusCheck)
      .catch((err) => {
        console.log(err);
      });
  }

  getWeather() {
    console.log(process.env.NEXT_PUBLIC_WEATHER_KEY);
    return this.getRequest(
      `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    );
  }
}

export default ApiClient;
