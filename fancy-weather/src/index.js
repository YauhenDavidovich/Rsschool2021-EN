import './style.scss';
import './bootstrap.min.css';
import '../node_modules/weather-icons/css/weather-icons.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import renderLoader from './js/view/renderLoader.js';
import renderFrame from './js/view/renderFrame.js';
import getUserLocation from './js/api/getLocation.js';
import getImage from './js/api/getImage.js';
import getForecast from './js/api/getForecast.js';
import getMap from './js/api/getMap.js';
import { getTags } from './js/utils.js';
import initControls from './js/control/initControls.js';

const lang = localStorage.getItem('lang') || 'ru';
const meas = localStorage.getItem('meas') || 'C';

async function init() {
  const location = await getUserLocation();

  const forecast = await getForecast(location);
  debugger
  

  const tags = getTags(forecast);
  const imageURL = await getImage(tags);

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

renderLoader();
init();
