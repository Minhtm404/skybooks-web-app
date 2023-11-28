import contextFactory from './ContextFactory';
import { ACTIONS } from '../constants';
import apiHelper from '../utils/apiHelper';

const productReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        totalProducts: action.payload.totalProducts
      };
    case ACTIONS.SET_ARCHITECTURE_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        architectureProducts: action.payload
      };
    case ACTIONS.SET_ART_PRODUCTS:
      return {
        ...state,
        isLoading: false,
        artProducts: action.payload
      };
    case ACTIONS.SET_PRODUCT:
      return { ...state, isLoading: false, product: action.payload };
    default:
      return state;
  }
};

const setIsLoading = dispatch => async isLoading => {
  dispatch({ type: ACTIONS.SET_IS_LOADING, payload: isLoading });
};

const getAllProducts =
  dispatch =>
  async ({ category = '', keyword = '', page = 1, limit = 10 }) => {
    try {
      const { data } = await apiHelper.get(
        `/products?category=${category}&keyword=${keyword}&page=${page}&limit=${limit}`
      );

      dispatch({
        type: ACTIONS.SET_PRODUCTS,
        payload: {
          products: data.data,
          totalProducts: data.results
        }
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: err.response ? err.response.data.message : err.message
      });
    }
  };

const getAllArchitectureProducts =
  dispatch =>
  async ({ keyword = '', page = 1, limit = 5 }) => {
    try {
      const { data } = await apiHelper.get(
        `/products?category=books&subCategory=architecture&keyword=${keyword}`
      );

      dispatch({
        type: ACTIONS.SET_ARCHITECTURE_PRODUCTS,
        payload: data.data
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: err.response ? err.response.data.message : err.message
      });
    }
  };

const getAllArtProducts =
  dispatch =>
  async ({ keyword = '', page = 1, limit = 5 }) => {
    try {
      const { data } = await apiHelper.get(
        `/products?category=books&subCategory=art&keyword=${keyword}`
      );

      dispatch({
        type: ACTIONS.SET_ART_PRODUCTS,
        payload: data.data
      });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: err.response ? err.response.data.message : err.message
      });
    }
  };

const getProductByAlias = dispatch => async alias => {
  try {
    const { data } = await apiHelper.get(`/products/aliases/${alias}`);

    dispatch({ type: ACTIONS.SET_PRODUCT, payload: data.data });
  } catch (err) {
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: err.response ? err.response.data.message : err.message
    });
  }
};

export const { Provider, Context } = contextFactory(
  productReducer,
  {
    setIsLoading,
    getAllProducts,
    getAllArchitectureProducts,
    getAllArtProducts,
    getProductByAlias
  },
  {
    isLoading: false,
    error: undefined,
    products: undefined,
    totalProducts: undefined,
    architectureProducts: undefined,
    artProducts: undefined,
    product: undefined
  }
);
