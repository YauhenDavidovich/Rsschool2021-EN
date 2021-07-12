import getImageURL from '../api/getImage.js';
import showBG from '../view/renderBG.js';

export default async function refreshHandler(tags) {
  const iconRefresh = document.querySelector('.icon-refresh');
  iconRefresh.classList.add('icon-refresh--spin');

  const imageURL = await getImageURL(tags);

  showBG(imageURL);

  iconRefresh.classList.remove('icon-refresh--spin');
}