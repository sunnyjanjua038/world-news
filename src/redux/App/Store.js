// store.js

import { configureStore } from '@reduxjs/toolkit';
import NewsReducer from '../features/NewsSlice'; // Assuming your  is in a 'reducers' folder

const store = configureStore({
  reducer: {
    news: NewsReducer,
  },
});

export default store;
