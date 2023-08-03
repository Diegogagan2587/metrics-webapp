import '../styling/HomePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateSelected } from '../redux/details/detailsSlice';
import { BsArrowRightCircle } from 'react-icons/bs';
import map_mexico from '../assets/map_mexico.png'

const continentsURL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Continental_models-Australia.gif/1280px-Continental_models-Australia.gif';

const HomePage = () => {
  const dispatch = useDispatch();
  const statesInCountry = useSelector((state) => state.weather.mexico.states);

  const eventHandler = (city) => {
    dispatch(updateSelected(city));
  };

  return (
    <>
      <section className="continent">
        <img src={map_mexico} alt="continents picture" />
        <div className="cont-header">
          <h1>Mexico</h1>
          <span>6958 views</span>
        </div>
      </section>
      <section className="countries-section">
        <h2>STATS BY CITY</h2>
        <ul className="countries-ul">
          {statesInCountry.map((state) => {
            const { latitude, longitude } = state;
            return (
              <li key={state.state} className="country">
                <NavLink to="/details" onClick={eventHandler(state.state)}>
                  <BsArrowRightCircle />
                </NavLink>
                <img src={state.img} alt={state.imgAlt} />
                <NavLink to="/details" onClick={eventHandler(state.state)}>
                  <h3 className='city-name'>{state.state}</h3>
                </NavLink>
                <span>{`coords: Lat${latitude}, Long${longitude}`}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
export default HomePage;
