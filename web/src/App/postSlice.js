import { createSlice } from '@reduxjs/toolkit';
import { posts } from 'data/posts';

const initialValues = posts;

const postSlice = createSlice({
  name: 'posts',
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

const { actions, reducer } = postSlice;
export const { logout } = actions;
export default reducer;
