import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import postReducer from 'App/postSlice';
import userReducer from 'App/userSlice';

const rootReducer = {
  posts: postReducer,
  users: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
