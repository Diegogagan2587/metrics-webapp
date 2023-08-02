import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './home/homeSlice';
import detailsReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    details: detailsReducer,
  },
});

export default store;
