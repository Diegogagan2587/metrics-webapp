//Libraries
import { Route, Routes } from 'react-router-dom';
// Components
import NavigationBar from './components/NavigationBar';
import  HomePage  from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWeatherAsync } from './redux/home/homeSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getWeatherAsync());
  },[useDispatch])
  return (
    <>
      <NavigationBar />
      <Routes >
        <Route path='/' element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/details' element={<DetailsPage/>} />
      </Routes >
    </>
  );
}

export default App;
