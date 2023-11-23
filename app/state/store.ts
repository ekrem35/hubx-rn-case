import {configureStore} from '@reduxjs/toolkit';

import {combineReducers} from 'redux';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist';

import storage from '@react-native-async-storage/async-storage';

import storageReducer from './slices/storage';

const rootReducer = combineReducers({
  storage: storageReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['storage'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
