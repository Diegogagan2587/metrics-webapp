import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const endPoint = '';

const fetchData = async () => {
  const request = await fetch(endPoint);
  const response = await request.json();
  console.log('response---->', response);
  return response;
};

const getWeatherDataThunk = createAsyncThunk('home/getHomeData', fetchData);

console.log('runing HomeSlice');

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    //reducers-here
    placeHolderReducer: (state, action) => {
      console.log('this is a placeholder reducer');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherDataThunk.fulfilled, (state, action) => {
      const newState = [];
      newState.push(action.payload);
      state.splice(0, state.length, ...newState);
    });
  },
});

export { getWeatherDataThunk };
export const { placeHolderReducer } = homeSlice.actions;
export default homeSlice.reducer;
