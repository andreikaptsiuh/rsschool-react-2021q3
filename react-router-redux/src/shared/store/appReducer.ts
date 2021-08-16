import { APIResponse, IAction, IState } from '../interfaces';

export const SEARCH = 'SEARCH';
export const LOAD = 'LOAD';

const defaultState: IState = {
  cards: {
    articles: [],
    totalResults: 0,
  },
  isLoad: false,
};

export const appReducer = (state: IState = defaultState, action: IAction) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, cards: action.payload };
    case LOAD:
      return { ...state, isLoad: action.payload };
    default:
      return state;
  }
};

export const setLoad = (payload: boolean) => ({ type: LOAD, payload });
export const setSearch = (payload: APIResponse) => ({ type: SEARCH, payload });
