import { createSlice } from '@reduxjs/toolkit';
import { users } from 'data/users';

const initialValues = users;

const userSlice = createSlice({
  name: 'users',
  initialState: {
    current: initialValues,
  },
  reducers: {
    //   logout(state) {
    //     state.current = null;
    //     state.isLoggedIn = false;
    //     localStorage.removeItem(StorageKeys.access);
    //   },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
