import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [] },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload)
    },
  },
});

export const { addUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
