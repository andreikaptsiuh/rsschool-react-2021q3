import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './appReducer';
import { restoreDataOnClient } from '../../data/restoreDataOnClient';

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: restoreDataOnClient(),
});
