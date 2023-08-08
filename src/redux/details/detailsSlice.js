import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
  selected: '',
}];

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    updateSelected: (state, action) => {
      state[0].selected = action.payload;
    },
  },
});

export const { updateSelected } = detailsSlice.actions;
export default detailsSlice.reducer;
