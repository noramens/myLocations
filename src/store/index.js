import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import categoriesSlice from './categories';
import locationsSlice from './locations';
import notificationSlice from './notifications';

const reducers = combineReducers({
  categories: categoriesSlice,
  locations: locationsSlice,
  notifications: notificationSlice
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['notifications']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export default store;
