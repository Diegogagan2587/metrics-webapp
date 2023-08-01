const keyAPI = 'c33def0700f3ac14afe2ffead5486742';
const latitud = '17';
const longitud = '92';
const endPoint = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitud}&lon=${longitud}&appid=${keyAPI}`;

const fetchWeather = async () => {
  const request = await fetch(endPoint);
  const response = await request.json();
  console.log('response---->', response);
  return response;
};

export default fetchWeather;