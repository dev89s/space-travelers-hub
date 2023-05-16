import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionsSlice from './missions/missionsSlice';
import dragonsSlice from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsSlice,
    dragons: dragonsSlice,
  },
});

export default store;
