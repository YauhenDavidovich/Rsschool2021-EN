import renderError from '../view/renderError.js';

export default async function getForecast(loc) {
  const API_TOKEN = '094d2f01c9172cdbf32222e4fee342c6';
  const { latitude, longitude } = loc;  
  
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&${longitude}&lang=eng&appid=${API_TOKEN}&units=metric`;

  try {
    const forecast = await fetch(URL).then(res => res.json());
    return forecast;
  } catch (err) {
    err.name = 'Forecast Error';
    err.message =
      'Forecast fetch error or just cors-anywhere.herokuapp.com unavailable again';
    renderError(err);
    throw new Error(`${err.name}(${err.code}): ${err.message}`);
  }
}