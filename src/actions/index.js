import axios from 'axios';

const API_KEY='7bed7122093ffbc6f05cb12e016399c4';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const URL = `${ROOT_URL}&q=${city},vn`;
  const REQUEST = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: REQUEST
  };
}
