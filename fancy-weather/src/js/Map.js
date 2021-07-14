const MAP = {
  ru: {
    week: [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ],
    month: [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ],
    short: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    other: [
      'Найти',
      'Найти город',
      'Широта',
      'Долгота',
      'Ощущается как ',
      'Скорость ветра: ',
      ' м/с',
      'Влажность: ',
    ],
    weather: {
      'thunderstorm with light rain': 'гроза с небольшим дождём',
      'thunderstorm with rain': 'гроза с дождем',
      'thunderstorm with heavy rain': 'гроза с проливным дождем',
      'light thunderstorm': 'небольшой дождь',
      thunderstorm: 'гроза',
      'heavy thunderstorm': 'сильная гроза',
      'ragged thunderstorm': 'прерывистая гроза',
      'thunderstorm with light drizzle': 'гроза с небольшим дождём',
      'thunderstorm with drizzle': 'гроза с дождем',
      'thunderstorm with heavy drizzle': 'гроза с проливным дождем',
      'light intensity drizzle': 'небольшой дождь',
      drizzle: 'дождь',
      'heavy intensity drizzle': 'сильный дождь',
      'light intensity drizzle rain': 'мелкий дождь',
      'drizzle rain': 'дождь',
      'heavy intensity drizzle rain': 'сильный дождь',
      'shower rain and drizzle': 'дождь и морось',
      'heavy shower rain and drizzle': 'ливень и дождь',
      'shower drizzle': 'морось',
      'light rain': 'слабый дождь',
      'moderate rain': 'дождь',
      'heavy intensity rain': 'сильный дождь',
      'very heavy rain': 'очень сильный дождь',
      'extreme rain': 'экстремальный дождь',
      'freezing rain': 'ледяной дождь',
      'light intensity shower rain': 'слабый ливень',
      'shower rain': 'ливень',
      'heavy intensity shower rain': 'сильный ливень',
      'ragged shower rain': 'прерывистый ливень',
      'light snow': 'слабый снег',
      snow: 'снег',
      'heavy snow': 'сильный снег',
      sleet: 'мокрый снег',
      'light shower sleet': 'слабый мокрый снег',
      'shower sleet': 'снежный дождь',
      'light rain and snow': 'слабый дождь со снегом',
      'rain and snow': 'дождь со снегом',
      'light shower snow': 'слабый снежный дождь',
      'shower snow': 'снежный дождь',
      'heavy shower snow': 'снежный шквал',
      mist: 'туман',
      smoke: 'дым',
      haze: 'дымка',
      'sand/ dust whirls': 'песок/вихри пыли',
      fog: 'туман',
      sand: 'песок',
      dust: 'пыль',
      'volcanic ash': 'вулканический пепел',
      squalls: 'шквалы',
      tornado: 'торнадо',
      'clear sky': 'чистое набо',
      'few clouds: 11-25%': 'малооблачно: 11-25%',
      'scattered clouds: 25-50%': 'рассеянные облака: 25-50%',
      'broken clouds: 51-84%': 'рваные облака: 51-84%',
      'overcast clouds: 85-100%': 'пасмурные облака: 85-100%',
    },
  },
  en: {
    week: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    month: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    other: [
      'Search',
      'Search city',
      'Latitude',
      'Longitude',
      'Feels like: ',
      'Wind speed: ',
      ' m/s',
      'Humidity: ',
    ],
    weather: {
      'thunderstorm with light rain': 'thunderstorm with light rain',
      'thunderstorm with rain': 'thunderstorm with rain',
      'thunderstorm with heavy rain': 'thunderstorm with heavy rain',
      'light thunderstorm': 'light thunderstorm',
      thunderstorm: 'thunderstorm',
      'heavy thunderstorm': 'heavy thunderstorm',
      'ragged thunderstorm': 'ragged thunderstorm',
      'thunderstorm with light drizzle': 'thunderstorm with light drizzle',
      'thunderstorm with drizzle': 'thunderstorm with drizzle',
      'thunderstorm with heavy drizzle': 'thunderstorm with heavy drizzle',
      'light intensity drizzle': 'light intensity drizzle',
      drizzle: 'drizzle',
      'heavy intensity drizzle': 'heavy intensity drizzle',
      'light intensity drizzle rain': 'light intensity drizzle rain',
      'drizzle rain': 'drizzle rain',
      'heavy intensity drizzle rain': 'heavy intensity drizzle rain',
      'shower rain and drizzle': 'shower rain and drizzle',
      'heavy shower rain and drizzle': 'heavy shower rain and drizzle',
      'shower drizzle': 'shower drizzle',
      'light rain': 'light rain',
      'moderate rain': 'moderate rain',
      'heavy intensity rain': 'heavy intensity rain',
      'very heavy rain': 'very heavy rain',
      'extreme rain': 'extreme rain',
      'freezing rain': 'freezing rain',
      'light intensity shower rain': 'light intensity shower rain',
      'shower rain': 'shower rain',
      'heavy intensity shower rain': 'heavy intensity shower rain',
      'ragged shower rain': 'ragged shower rain',
      'light snow': 'light snow',
      snow: 'snow',
      'heavy snow': 'heavy snow',
      sleet: 'sleet',
      'light shower sleet': 'light shower sleet',
      'shower sleet': 'shower sleet',
      'light rain and snow': 'light rain and snow',
      'rain and snow': 'rain and snow',
      'light shower snow': 'light shower snow',
      'shower snow': 'shower snow',
      'heavy shower snow': 'heavy shower snow',
      mist: 'mist',
      smoke: 'smoke',
      haze: 'haze',
      'sand/ dust whirls': 'sand/ dust whirls',
      fog: 'fog',
      sand: 'sand',
      dust: 'dust',
      'volcanic ash': 'volcanic ash',
      squalls: 'squalls',
      tornado: 'tornado',
      'clear sky': 'clear sky',
      'few clouds: 11-25%': 'few clouds: 11-25%',
      'scattered clouds: 25-50%': 'scattered clouds: 25-50%',
      'broken clouds: 51-84%': 'broken clouds: 51-84%',
      'overcast clouds: 85-100%': 'overcast clouds: 85-100%',
    },
  },
  be: {
    week: [
      'Нядзеля',
      'Панядзелак',
      'Аўторак',
      'Серада',
      'Чацвер',
      'Пятніца',
      'Субота',
    ],
    month: [
      'студзеня',
      'лютага',
      'сакавіка',
      'красавіка',
      'траўня',
      'чэрвеня',
      'ліпеня',
      'жніўня',
      'верасня',
      'кастрычніка',
      'лістапада',
      'снежня',
    ],
    short: ['Няд', 'Пнд', 'Аўт', 'Сер', 'Чцв', 'Пят', 'Суб', 'Нядзеля'],
    other: [
      'Знайсці',
      'Пошук горада',
      'Шырата',
      'Даўгата',
      'Адчуваецца як: ',
      'Хуткасць ветра: ',
      ' м/с',
      'Вільготнасць: ',
    ],
    weather: {
      'thunderstorm with light rain': 'навальніца з невялікім дажджом',
      'thunderstorm with rain': 'навальніца з дажджом',
      'thunderstorm with heavy rain': 'навальніца з праліўным дажджом',
      'light thunderstorm': 'невялікі дождж',
      thunderstorm: 'навальніца',
      'heavy thunderstorm': 'моцная навальніца',
      'ragged thunderstorm': 'ірваная навальніца',
      'thunderstorm with light drizzle': 'навальніца з невялікім дажджом',
      'thunderstorm with drizzle': 'навальніца з дажджом',
      'thunderstorm with heavy drizzle': 'навальніца з праліўным дажджом',
      'light intensity drizzle': 'невялікі дождж',
      drizzle: 'дождж',
      'heavy intensity drizzle': 'моцны дождж',
      'light intensity drizzle rain': 'дробны дождж',
      'drizzle rain': 'дождж',
      'heavy intensity drizzle rain': 'моцны дождж',
      'shower rain and drizzle': 'дождж і імжа',
      'heavy shower rain and drizzle': 'лівень, дождж',
      'shower drizzle': 'імжа',
      'light rain': 'дождж',
      'moderate rain': 'моцны дождж',
      'heavy intensity rain': 'моцны дождж',
      'very heavy rain': 'вельмі моцны дождж',
      'extreme rain': 'экстрэмальны дождж',
      'freezing rain': 'ледзяны дождж',
      'light intensity shower rain': 'слабы лівень',
      'shower rain': 'лівень',
      'heavy intensity shower rain': 'моцны лівень',
      'ragged shower rain': 'ірваны лівень',
      'light snow': 'невялікі снег',
      snow: 'снег',
      'heavy snow': 'снегапад',
      sleet: 'мокры снег',
      'light shower sleet': 'мокры снег',
      'shower sleet': 'мокры снег',
      'light rain and snow': 'невялікі дождж і снег',
      'rain and snow': 'дождж і снег',
      'light shower snow': 'невялікі дождж і снег',
      'shower snow': 'дождж і снег',
      'heavy shower snow': 'лівень, снег',
      mist: 'туман',
      smoke: 'дым',
      haze: 'смуга',
      'sand/ dust whirls': 'пясок / пыл кружыцца',
      fog: 'туман',
      sand: 'пясок',
      dust: 'пыл',
      'volcanic ash': 'вулканічны попел',
      squalls: 'шквалы',
      tornado: 'тарнада',
      'clear sky': 'чыстае неба',
      'few clouds: 11-25%': 'невялікая воблачнасць: 11-25%',
      'scattered clouds: 25-50%': 'невялікая воблачнасць: 25-50%',
      'broken clouds: 51-84%': 'суцэльная воблачнасць: 51-84%',
      'overcast clouds: 85-100%': 'суцэльная воблачнасць: 85-100%',
    },
  },
};

export default MAP;
