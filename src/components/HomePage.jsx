import '../styling/HomePage.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateSelected } from '../redux/details/detailsSlice';
import translateAirQualityFrom from './translateAirQualityFrom';
import { BsArrowRightCircle } from 'react-icons/bs';
import mapMexico from '../assets/mapMexico.png';

const HomePage = () => {
  const dispatch = useDispatch();
  const numOfCitiesFromStore = useSelector(
    (state) => state.navigation[0].citiesToRender
  );
  const statesInCountry = useSelector((state) => {
    const result = [];
    const cities = state.weather.mexico.states;
    if (numOfCitiesFromStore) {
      if (numOfCitiesFromStore > cities.length) {
        return cities;
      }
      for (let i = 0; i < numOfCitiesFromStore; i++) {
        result.push(cities[i]);
      }
      return result;
    }
    return cities;
  });

  const eventHandler = (cityName) => {
    dispatch(updateSelected(cityName));
  };

  return (
    <>
      <section className="continent">
        <img src={mapMexico} alt="country picture" />
        <div className="cont-header">
          <h1>Mexico</h1>
          <span>America</span>
        </div>
      </section>
      <section className="countries-section">
        <h2>STATS BY CITY</h2>
        <ul className="countries-ul">
          {statesInCountry.map((currentCity) => {
            const { latitude, longitude, state: cityName } = currentCity;
            const  airQuality  = currentCity.data[0].main.aqi;
 
            return (
              <li key={currentCity.state} className="country">
                <NavLink to="/details" onClick={() => eventHandler(cityName)}>
                  <BsArrowRightCircle />
                </NavLink>
                <img src={currentCity.img} alt={currentCity.imgAlt} />
                <NavLink to="/details" onClick={() => eventHandler(cityName)}>
                  <h3 className="city-name">{cityName}</h3>
                </NavLink>
                <span>{`coords: Lat${latitude}, Long${longitude}`}</span>
                <span>{`Air Quality: ${translateAirQualityFrom(airQuality)}`}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
export default HomePage;
