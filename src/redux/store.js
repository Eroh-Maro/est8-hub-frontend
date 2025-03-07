import { configureStore } from '@reduxjs/toolkit';
import housesApi from './features/houses/houses.Api';

export const store = configureStore({
  reducer: {
   
    [housesApi.reducerPath]: housesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(housesApi.middleware),
});