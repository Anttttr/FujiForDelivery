import { configureStore } from '@reduxjs/toolkit';
import queReducer from './queSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    que: queReducer,
    user: userReducer,
  },
});
