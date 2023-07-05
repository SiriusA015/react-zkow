import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  loggedIn: false,
  test: { a: 1 },
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
  },
});

export const { setCurrentUser, setLoggedIn } = userSlice.actions;

export const userReducer = userSlice.reducer;