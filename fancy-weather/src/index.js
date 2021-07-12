import './style.scss';
import './bootstrap.min.css';
import '../node_modules/weather-icons/css/weather-icons.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

import showLoader from './js/view/loader.js';
import renderFrame from './js/view/renderForm.js';

import getTags from './js/getTags.js';

import getUserLocation from './js/api/getLocation.js';
import getImageURL from './js/api/getImage.js';
import getForecast from './js/api/getForecast.js';
import getMap from './js/api/getMap.js';

import initControls from './js/control/initControls.js';

const lang = localStorage.getItem('lang') || 'ru';
const meas = localStorage.getItem('meas') || 'C';

async function init() {
  const location = await getUserLocation();

  const forecast = await getForecast(location);
  const { currently } = forecast;

  const tags = getTags(currently);
  const imageURL = await getImageURL(tags);

  const timeInterval = await renderFrame(
    imageURL,
    forecast,
    location,
    lang,
    meas
  );

  const map = await getMap(location, lang);

  initControls(tags, map, meas, timeInterval);
}

showLoader();
init();
