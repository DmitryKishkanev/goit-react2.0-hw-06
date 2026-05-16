import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,

  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;
