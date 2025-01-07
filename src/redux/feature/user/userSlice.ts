import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TInitialState = {
  token: string | null;
};

const initialState: TInitialState = {
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const userCurrentToken = (state: RootState) => state.user.token;

export const { setToken } = userSlice.actions;

export default userSlice.reducer;
