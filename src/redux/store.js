import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './home/homeSlice'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    another: [],
  },
});

export default store;
