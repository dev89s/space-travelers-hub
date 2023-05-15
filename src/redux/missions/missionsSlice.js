/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  listState: 'unloaded',
  error: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {

  },
});

export const { } = missionsSlice.actions;
export default missionsSlice.reducer;
