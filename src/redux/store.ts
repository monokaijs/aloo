import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createFilter} from 'redux-persist-transform-filter';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {setAutoFreeze} from 'immer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { appSlice, AppSliceState } from "@redux/slices/app.slice";

setAutoFreeze(false);

export const reducers = combineReducers({
  app: appSlice.reducer
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 100000,
  blacklist: ['downloads', 'room'],
  whitelist: ['app', 'auth', 'player'],
  stateReconciler: autoMergeLevel2,
  transforms: [
    createFilter('app', [
    ]),
  ],
};
const persistedReducer = persistReducer<any>(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export interface RootState {
  app: AppSliceState
}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {persistor, store};
