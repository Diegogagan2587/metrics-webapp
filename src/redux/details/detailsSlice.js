import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    selected: null,
}];

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        updateSelected: (state, action) => {

        }
    },
});

export const { updateSelected } = detailsSlice.actions;
export default detailsSlice.reducer;
