/* eslint-disable */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  dragons: [],
  listState: "idle",
  error: false,
};
const dragonsUrl = "https://api.spacexdata.com/v4/dragons";
export const fetchDragons = createAsyncThunk(
  "dragons/fetchDragons",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(dragonsUrl);
      if (!response.ok) {
        rejectWithValue(response.statusText || "Something went wrong");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message || "Something went wrong");
    }
  }
);
const dragonsSlice = createSlice({
  name: "dragons",
  initialState,
  reducers: {
    reserverDragon: (state, { payload }) => {
      const updatedDragons = state.dragons.map((dragon) => {
        if (dragon.id === payload) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
      state.dragons = updatedDragons;
    },
    cancelReservation: (state, { payload }) => {
      const updatedDragons = state.dragons.map((dragon) => {
        if (dragon.id === payload) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });
      state.dragons = updatedDragons;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.listState = "Loading";
      })
      .addCase(fetchDragons.fulfilled, (state, { payload }) => {
        state.error = false;
        state.listState = "fulfilled";
        state.dragons = payload;
      })
      .addCase(fetchDragons.rejected, (state, { payload }) => {
        state.listState = "rejected";
        state.error = payload;
      });
  },
});

export const { reserverDragon, cancelReservation } = dragonsSlice.actions;
export const dragonSelector = (state) => state.dragons;
export default dragonsSlice.reducer;
