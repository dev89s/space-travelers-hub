/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets',
  async (_, thunkAPI) => {
    const url = 'https://api.spacexdata.com/v4/rockets';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return thunkAPI.rejectWithValue(`HTTP Response Code: ${response.status}`);
      }
      const data = await response.json();
      return thunkAPI.fulfillWithValue(data);

    } catch (err) {
      // eslint-disable-next-line
      console.error(`${err.name}:`, err.message);
      throw thunkAPI.rejectWithValue(err.message);
    }
  }
)

const initialState = {
  rockets: [],
  isLoading: false,
  listState: 'empty',
  error: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const { payload: id } = action;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      })
      state.rockets = newState;
    },
    cancelRocket: (state, action) => {
      const { payload: id } = action;
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      state.rockets = newState;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.listState = 'loaded';
        const { payload } = action;
        const rockets = [];
        payload.forEach((item) => {
          const { id, name, description, flickr_images } = item;
          const rocket = { id, name, description, flickr_images };
          rockets.push(rocket);
        })
        state.rockets = rockets;
      })
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      }).
      addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        const { payload } = action;
        state.error = payload;
      })

  }
});

export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
