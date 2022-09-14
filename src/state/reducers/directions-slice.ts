import type { TDirections } from "@/global-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DirectionState = {
  directions: TDirections;
  loading: boolean;
  error?: string;
};

export const initialState: DirectionState = {
  directions: [],
  loading: false,
};

export const DirectionsSlice = createSlice({
  name: "directions",
  initialState,
  reducers: {
    directionsFetching(state) {
      state.loading = true;
    },

    directionsFetchingSuccess(state, action: PayloadAction<TDirections>) {
      state.loading = false;
      state.error = undefined;
      state.directions = action.payload;
    },

    directionsFetchingError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const DirectionReducers = DirectionsSlice.reducer;
