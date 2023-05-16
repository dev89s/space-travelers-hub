/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dragons: [],
  listState: 'unloaded',
  error: false,
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {

  },
});

export const { } = dragonsSlice.actions;
export default dragonsSlice.reducer;
