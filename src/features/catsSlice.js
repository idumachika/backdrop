import {createSlice} from '@reduxjs/toolkit';

export const catSlice = createSlice({
  name: 'cat',
  initialState: {
    favourite: false,
    cats: [],
  },
  reducers: {
    add(state, action) {
      const catExists = state.cats.find(item => item.id === action.payload.id);
      if (catExists) {
        return;
      }

      state.cats.push(action.payload);
    },
    remove(state, action) {
      state.cats = state.cats.filter(item => item.id !== action.payload);
    },
  },
});

export const {add, remove} = catSlice.actions;
export default catSlice.reducer;
