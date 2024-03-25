/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
  authData: undefined,
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export const { actions: userActions } = counterSlice;
export const { reducer: userReducer } = counterSlice;
