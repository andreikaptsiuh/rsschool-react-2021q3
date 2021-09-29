import {
  APIResponse, IAction, ICard, IState,
} from '../interfaces';

export const SEARCH = 'SEARCH';
export const LOAD = 'LOAD';
export const SET_DETAILS = 'SET_DETAILS';

const defaultState: IState = {
  cards: {
    articles: [],
    totalResults: 0,
  },
  isLoad: false,
  card: {
    id: 2,
    title: 'title',
    author: 'author',
    description: 'description',
    url: 'url',
  },
};

export const appReducer = (state: IState = defaultState, action: IAction) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, cards: action.payload };
    case LOAD:
      return { ...state, isLoad: action.payload };
    case SET_DETAILS:
      return { ...state, card: action.payload };
    default:
      return state;
  }
};

export const setLoad = (payload: boolean) => ({ type: LOAD, payload });
export const setSearch = (payload: APIResponse) => ({ type: SEARCH, payload });
export const setDetails = (payload: ICard) => ({ type: SET_DETAILS, payload });
