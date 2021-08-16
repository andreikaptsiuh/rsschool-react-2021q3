import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { appReducer } from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
