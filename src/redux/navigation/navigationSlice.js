import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    isModalOpen: false,
  },
];

const navigationSlice = createSlice({
    name:'navigation',
    initialState,
    reducers: {
        openModal: (state,action)=>{
            const newState = { isModalOpen: true };
            state.splice(0,state.length,newState);
        },
        closeModal: (state,action)=>{
            const newState = {isModalOpen: false};
            state.splice(0,state.length, newState);
        },
    }
})

export const { openModal,closeModal } = navigationSlice.actions;
export default navigationSlice.reducer;
