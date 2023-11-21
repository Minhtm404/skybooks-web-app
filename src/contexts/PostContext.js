import contextFactory from './ContextFactory';

import { ACTIONS } from '../constants';
import apiHelper from '../utils/apiHelper';

const postReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ACTIONS.SET_POSTS:
      return { ...state, isLoading: false, posts: action.payload };
    case ACTIONS.SET_POST:
      return { ...state, isLoading: false, post: action.payload };
    default:
      return state;
  }
};

const setIsLoading = dispatch => async isLoading => {
  dispatch({ type: ACTIONS.SET_IS_LOADING, payload: isLoading });
};

const getAllPosts = dispatch => async () => {
  try {
    const { data } = await apiHelper.get('/posts');

    dispatch({ type: ACTIONS.SET_POSTS, payload: data.data });
  } catch (err) {
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: err.response ? err.response.data.message : err.message
    });
  }
};

const getPostByAlias = dispatch => async alias => {
  try {
    const { data } = await apiHelper.get(`/posts/aliases/${alias}`);

    dispatch({ type: ACTIONS.SET_POST, payload: data.data });
  } catch (err) {
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: err.response ? err.response.data.message : err.message
    });
  }
};

export const { Provider, Context } = contextFactory(
  postReducer,
  {
    setIsLoading,
    getAllPosts,
    getPostByAlias
  },
  {
    isLoading: false,
    error: undefined,
    posts: undefined,
    post: undefined
  }
);
