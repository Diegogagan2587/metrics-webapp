// Libraries
import { Route, Routes } from 'react-router-dom';
// Components
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import { getWeatherAsync } from './redux/home/homeSlice';

function App() {
  const statesInCountry = useSelector((state) => state.weather.mexico.states);
  const dispatch = useDispatch();

  useEffect(() => {
    statesInCountry.forEach((state) => {
      const { latitude, longitude } = state;
      dispatch(getWeatherAsync({ latitude, longitude }));
    });
  }, []);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
