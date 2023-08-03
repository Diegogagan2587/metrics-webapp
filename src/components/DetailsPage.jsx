import '../styling/DetailsPage.css'
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const cities = useSelector((state) => state.weather.mexico.states);
  const currentCity = useSelector((state)=>state.details[0].selected);
  const currentCityData = cities.filter((city)=>city.state===`${currentCity}`);
  const { state:name, img} = currentCityData[0];
  console.log('detailsPage is receiving---->', name)
  const {components:polutionStats} = currentCityData[0].data[0];
  return (
    <div className='details-section'>
      <section className="state">
        <img src={img} alt="state picture" />
        <div className="state-header">
          <h1>{name}</h1>
          <span>6958 views</span>
        </div>
      </section>
      <section className='data'>
        <h2 className='state-h2'>State Breackdown</h2>
        <ul className='data-list'>
            <li><span className='bold'>CO:</span> <span>{polutionStats.co}</span> </li>
            <li><span className='bold'>NH3:</span> <span>{polutionStats.nh3}</span> </li>
            <li><span className='bold'>NO:</span> <span>{polutionStats.no}</span> </li>
            <li><span className='bold'>NO2:</span> <span>{polutionStats.no2}</span> </li>
            <li><span className='bold'>O3:</span> <span>{polutionStats.o3}</span> </li>
            <li><span className='bold'>PM2_5:</span> <span>{polutionStats.pm2_5}</span> </li>
            <li><span className='bold'>PM10:</span> <span>{polutionStats.pm10}</span> </li>
            <li><span className='bold'>SO2:</span> <span>{polutionStats.so2}</span> </li>
        </ul>
      </section>
    </div>
  );
};
export default DetailsPage;
