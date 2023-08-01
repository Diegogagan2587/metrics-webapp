import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchWeather from './fetchWeather';
const initialState = [{}];

const getWeatherAsync = createAsyncThunk('weather/fetchWeather', fetchWeather);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getHome: (state,action ) =>{
        console.log(state,action);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherAsync.fulfilled, (state, action) => {
      const newState = [];
      newState.push(action.payload);
      console.log('action.payload===>>',newState)
      state.splice(0, state.length, ...newState);
    });
  },
});

export { getWeatherAsync, weatherSlice };
export const { getHome } = weatherSlice.actions;
export default weatherSlice.reducer;

