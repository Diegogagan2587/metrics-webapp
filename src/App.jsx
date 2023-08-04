//Libraries
import { Route, Routes } from 'react-router-dom';
// Components
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherAsync } from './redux/home/homeSlice';
import { useSelector } from 'react-redux';

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
