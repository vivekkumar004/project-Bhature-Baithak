import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface UserState {
  isAuthenticated: boolean;
}

// Initial state
const initialState: UserState = {
  isAuthenticated: false,
};

// Actual Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action to set the authentication status
    setUserAuth(state, action) {
      state.isAuthenticated = action.payload;
    },
    [HYDRATE]: (state: any, action: any) => {
      console.log(action);
      return {
        ...state,
        ...action.payload.user,
      };
    },
  },
});

export const { setUserAuth } = userSlice.actions;

export default userSlice.reducer;