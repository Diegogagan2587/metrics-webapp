import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    selected: null,
}];

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {},
});

export default detailsSlice.reducer;
