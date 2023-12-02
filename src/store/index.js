import { createSlice, configureStore } from "@reduxjs/toolkit";
const authinitialstate = { isauthenticated: false };

const authSlice = createSlice({
  name: "authenticated",
  initialState: authinitialstate,
  reducers: {
    login(state) {
      state.isauthenticated = true;
    },
    logout(state) {
      state.isauthenticated = false;
    },
  },
});

const store = configureStore({ reducer: authSlice.reducer});
export const authActions = authSlice.actions;

export default store;
