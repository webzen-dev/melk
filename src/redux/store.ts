import { configureStore } from '@reduxjs/toolkit';
import advertsReducer from './slices/advertsSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
