import '../styling/HomePage.css';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const continentsURL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Continental_models-Australia.gif/1280px-Continental_models-Australia.gif';

const HomePage = () => {
  const statesInCountry = useSelector((state) => state.weather.mexico.states);

  return (
    <>
      <section className="continent">
        <img src={continentsURL} alt="continents picture" />
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
                <NavLink to="/details">
                  <h3>{state.state}</h3>
                  <span>{`coordinates: Lat ${latitude}, Long ${longitude}`}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
export default HomePage;
