
const keyAPI = 'c33def0700f3ac14afe2ffead5486742';


const fetchWeather = async ({latitude,longitude}) => {
const endPoint = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${keyAPI}`;
  const request = await fetch(endPoint);
  const response = await request.json();
  return response;
};

export default fetchWeather;
