import { configureStore } from '@reduxjs/toolkit';

import phonebookReducer from './conatctSlice';

const store = configureStore({
  reducer: {
    contact: phonebookReducer,
    filter: '',
  },
});

export default store;
