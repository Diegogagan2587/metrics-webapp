import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './home/homeSlice';
import detailsReducer from './details/detailsSlice';
import navigationReducer from './navigation/navigationSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    details: detailsReducer,
    navigaton: navigationReducer,
  },
});

export default store;
