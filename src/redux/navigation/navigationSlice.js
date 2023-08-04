import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    isModalOpen: false,
    citiesToRender:undefined,
  },
];

const navigationSlice = createSlice({
    name:'navigation',
    initialState,
    reducers: {
        openModal: (state,action)=>{
            const newState = { ...state[0],isModalOpen: true };
            state.splice(0,state.length,newState);
        },
        closeModal: (state,action)=>{
            const newState = { ...state[0],isModalOpen: false };
            state.splice(0,state.length, newState);
        },
        updateNumberOfCities: (state,action) => {
            const newState = {...state[0],citiesToRender:action.payload}
            state.splice(0,state.length, newState);
        }
    }
})

export const { openModal,closeModal, updateNumberOfCities } = navigationSlice.actions;
export default navigationSlice.reducer;
