import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import catReducer from '../features/catsSlice';
import {catsApi} from './catsApi';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const store = configureStore({
  reducer: {
    [catsApi.reducerPath]: catsApi.reducer,
    cats: persistReducer(persistConfig, catReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(catsApi.middleware),
});

export const persistor = persistStore(store);
