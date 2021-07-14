import { getRandomNumber } from '../utils.js';
import renderError from '../view/renderError.js';

export default async function getImage(tags) {  
  const [season, daytime, forecast] = tags;
  

  const API_TOKEN = '9901f3d791ae58afaab6db157f0875f3';
  debugger
  const URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_TOKEN}&tags='${season},${daytime},${forecast}'&tag_mode=all&sort=relevance&format=json&nojsoncallback=1`;

  try {
    const data = await fetch(URL).then(res => res.json());
    const num = getRandomNumber(data.photos.photo.length);
    const photo = data.photos.photo[num];

    const imageURL = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;

    return imageURL;
    debugger
  } catch (err) {
    err.name = 'Image API Error';
    err.message = 'www.flickr.com unavailable now';
    renderError(err);
    throw new Error(`${err.name}(${err.code}): ${err.message}`);
  }
}