import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const cities = useSelector((state) => state.weather.mexico.states);
  const currentCity = useSelector((state)=>state.details[0].selected);
  const currentCityData = cities.filter((city)=>city.state===`${currentCity}`);
  const { state:name, img} = currentCityData[0];
  console.log('current city in details--->',currentCityData[0])
  const {components:polutionStats} = currentCityData[0].data[0];
  return (
    <div>
      <section className="continent">
        <img src={img} alt="continents picture" />
        <div className="cont-header">
          <h1>{name}</h1>
          <span>6958 views</span>
        </div>
      </section>
      <section>
        <h2>Polution Data</h2>
        <ul>
            <li><span>CO:</span> <span>{polutionStats.co}</span> </li>
            <li><span>nh3:</span> <span>{polutionStats.nh3}</span> </li>
            <li><span>no:</span> <span>{polutionStats.no}</span> </li>
            <li><span>no2:</span> <span>{polutionStats.no2}</span> </li>
            <li><span>o3:</span> <span>{polutionStats.o3}</span> </li>
            <li><span>pm2_5:</span> <span>{polutionStats.pm2_5}</span> </li>
            <li><span>pm10:</span> <span>{polutionStats.pm10}</span> </li>
            <li><span>so2:</span> <span>{polutionStats.so2}</span> </li>
        </ul>
      </section>
    </div>
  );
};
export default DetailsPage;
