import MAP from '../Map.js';
import {
  getGeocode
} from '../api/getMap.js';
import {
  toFahrenheit
} from '../utils.js';

export default async function renderWeather(
  forecastData,
  location,
  lang,
  meas
) {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const langArray = MAP[lang];

  let currTemp;
  let apparentTemp;
  switch (meas) {
    case 'C':
      currTemp = Math.round(forecastData.current.temp);
      apparentTemp = Math.round(Math.round(forecastData.current.feels_like));
      break;
    case 'F':
      currTemp = toFahrenheit(forecastData.current.main.temp);
      apparentTemp = toFahrenheit(forecastData.current.main.feels_like);
      break;
    default:
      break;
  }

  const {
    latitude,
    longitude
  } = location;
  const geo = await getGeocode([latitude, longitude], lang);
  const res = geo.geoObjects.get(0).properties.getAll().balloonContentBody;

  const forecastWrapper = document.createElement('div');
  forecastWrapper.classList.add('forecast-wrapper');

  const locationEl = document.createElement('div');
  locationEl.classList.add('location');
  locationEl.innerHTML = res;

  const dateTime = document.createElement('div');
  dateTime.classList.add('date-time');

  const forecastShort = document.createElement('span');
  forecastShort.classList.add('forecast-short');
  const forecastShortResponse = forecastData.current.weather[0].description;
  debugger
  forecastShort.textContent = langArray.weather[forecastShortResponse];

  const mainIcon = document.createElement('i');
  const mainIconCode = forecastData.current.weather[0].icon
  mainIcon.innerHTML = `<img src='http://openweathermap.org/img/wn/${mainIconCode}@2x.png'>`
  mainIcon.classList.value = `icon-main`;

  const forecastCurrent = document.createElement('div');
  forecastCurrent.classList.add('forecast-current');

  const tempSpan = document.createElement('span');
  tempSpan.classList.add('forecast-current__temp');
  tempSpan.textContent = `${currTemp}°`;

  forecastCurrent.append(tempSpan, mainIcon);

  const feelsSpan = document.createElement('span');
  feelsSpan.classList.add('forecast-detail__feels');
  feelsSpan.textContent = `${langArray.other[4]} ${apparentTemp}°`;

  const windSpan = document.createElement('span');
  windSpan.classList.add('forecast-detail__wind');
  windSpan.textContent = `${langArray.other[5]} ${Math.round(
    forecastData.current.wind_speed
  )}${langArray.other[6]}`;

  const humiditySpan = document.createElement('span');
  humiditySpan.classList.add('forecast-detail__humidity');
  humiditySpan.textContent = `${langArray.other[7]} ${Math.round(
    forecastData.current.humidity
  )}°`;

  const forecastDetail = document.createElement('div');
  forecastDetail.classList.add('forecast-detail');
  forecastDetail.append(feelsSpan, windSpan, humiditySpan);

  const {
    week
  } = MAP[lang];

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 3; i += 1) {
    const el = document.createElement('div');
    el.classList.add('forecast-daily__day');

    let day = dayOfWeek + i + 1;
    let temperatureHigh;
    let temperatureLow;

    if (day > 6) {
      day -= 7;
    }

    switch (meas) {
      case 'C':
        temperatureHigh = Math.round(forecastData.daily[i].temp.max);
        temperatureLow = Math.round(forecastData.daily[i].temp.min);
        break;
      case 'F':
        temperatureHigh = toFahrenheit(forecastData.daily[i].temp.max);
        temperatureLow = toFahrenheit(forecastData.daily[i].temp.min);
        break;
      default:
        break;
    }

    const spanDay = document.createElement('p');
    spanDay.classList.add('forecast-daily__week-day');
    spanDay.textContent = week[day];

    const spanTempHight = document.createElement('span');
    spanTempHight.classList.add('forecast-daily__temp-hight');
    spanTempHight.textContent = `${temperatureHigh}°`;

    const spanTempLow = document.createElement('span');
    spanTempLow.classList.add('forecast-daily__temp-low');
    spanTempLow.textContent = `${temperatureLow}°`;


    const icon = document.createElement('i');
    const iconCode = forecastData.daily[i].weather[0].icon
    icon.innerHTML = `<img src='http://openweathermap.org/img/wn/${iconCode}.png'>`
    // const iconResp = forecastData.daily[i].weather[0].main
    // debugger
    // const iconName = MAP.icon[iconResp][0];
    // icon.classList.value = `wi ${iconName} forecast-daily__icon`;

    el.append(spanDay, icon, spanTempHight, spanTempLow);
    fragment.appendChild(el);
  }

  const forecastDaily = document.createElement('div');
  forecastDaily.classList.add('forecast-daily');

  forecastDaily.appendChild(fragment);

  forecastWrapper.append(
    locationEl,
    dateTime,
    forecastShort,
    forecastCurrent,
    forecastDetail,
    forecastDaily
  );

  return forecastWrapper;
}
