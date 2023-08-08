import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchWeather from './fetchWeather';
import tabasco from '../../assets/map_mexico_tabasco.png';
import quintanaroo from '../../assets/quintanaroo.png';
import mexicoCity from '../../assets/mexico_city.png';
import monterrey from '../../assets/monterrey.png';
import guadalajara from '../../assets/guadalajara.png';
import acapulco from '../../assets/acapulco-guerrero.png';

const getWeatherAsync = createAsyncThunk('weather/fetchWeather', fetchWeather);

const initialState = {
  mexico: {
    states: [
      {
        state: 'VILLAHERMOSA',
        latitude: 17,
        longitude: 92,
        data: null,
        img: tabasco,
        imgAlt: 'Map of Tabasco',
      },
      {
        state: 'CANCUN',
        latitude: 21,
        longitude: -86,
        data: null,
        img: quintanaroo,
        imgAlt: 'Map of Tabasco',
      },
      {
        state: 'MEXICO CITY',
        latitude: 19,
        longitude: -99,
        data: null,
        img: mexicoCity,
        imgAlt: 'Map of Tabasco',
      },
      {
        state: 'MONTERREY',
        latitude: 25,
        longitude: -100,
        data: null,
        img: monterrey,
        imgAlt: 'Map of Tabasco',
      },
      {
        state: 'GUADALAJARA',
        latitude: 20,
        longitude: -103,
        data: null,
        img: guadalajara,
        imgAlt: 'Map of Tabasco',
      },
      {
        state: 'ACAPULCO',
        latitude: 16,
        longitude: -99,
        data: null,
        img: acapulco,
        imgAlt: 'Map of Tabasco',
      },
    ],
  },
};
const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherAsync.fulfilled, (state, action) => {
      const newState = [];

      state.mexico.states.forEach((city) => {
        const { latitude, longitude } = city;
        const { lat, lon } = action.payload.coord;
        const data = action.payload.list;
        if (latitude === lat && longitude === lon) {
          newState.push({ ...city, data });
        } else {
          newState.push(city);
        }
      });

      state.mexico.states.splice(0, state.mexico.states.length, ...newState);
    });
  },
});

export { getWeatherAsync, weatherSlice };
export const { getHome } = weatherSlice.actions;
export default weatherSlice.reducer;
