import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import categoriesSlice from './categories';
import locationsSlice from './locations';

const reducer = combineReducers({
  categories: categoriesSlice,
  locations: locationsSlice
});

const store = configureStore({
  reducer
});

export default store;
