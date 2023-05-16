import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionReduce from './missions/missionsSlice';
import dragonsSlice from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionReduce,
    dragons: dragonsSlice,
  },
});

export default store;
