import { createSlice } from '@reduxjs/toolkit';

const initialState = [{
    selected: "",
}];

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        updateSelected: (state, action) => {
            console.log('runing within updateSelected reducer-----')
            console.log('action',action.payload)
            const newCity = action.payload;
            state[0].selected = action.payload;
        }
    },
});

export const { updateSelected } = detailsSlice.actions;
export default detailsSlice.reducer;
