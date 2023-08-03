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
            console.log('will open modal')
        },
        closeModal: (state,action)=>{
            console.log('will close modal')
        },
    }
})

export const { openModal,closeModal } = navigationSlice.actions;
export default navigationSlice.reducer;
