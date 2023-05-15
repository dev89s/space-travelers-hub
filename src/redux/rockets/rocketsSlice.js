/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  listState: 'unloaded',
  error: false,
};

const rockesSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {

  },
});

export const { } = rockesSlice.actions;
export default rockesSlice.reducer;
