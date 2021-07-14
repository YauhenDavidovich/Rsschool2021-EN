/* eslint-disable no-debugger */
export default function speachHandler() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognizer = new SpeechRecognition();
  const lang = document.querySelector('.lang-select').value.toLowerCase();
  let langFormatted;

  switch (lang) {
    case 'en':
      langFormatted = 'en-US';
      break;
    case 'ru':
      langFormatted = 'ru-RU';
      break;
    case 'be':
      langFormatted = 'en-RU';
      break;
    default:
      break;
  }

  recognizer.lang = langFormatted;

  function onRecognizeHandler(e) {
    const result = e.results[e.resultIndex];
    document.querySelector('.input-search').value = result[0].transcript;
    document.querySelector('.button-search').click();
  }
  recognizer.onresult = onRecognizeHandler;

  recognizer.start();
}
