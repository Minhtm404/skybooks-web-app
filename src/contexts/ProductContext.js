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
      return { ...state, isLoading: false, products: action.payload };
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
  async ({ category = '', keyword = '' }) => {
    try {
      const { data } = await apiHelper.get(
        `/products?category=${category}&keyword=${keyword}`
      );

      dispatch({ type: ACTIONS.SET_PRODUCTS, payload: data.data });
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
    getProductByAlias
  },
  {
    isLoading: false,
    error: undefined,
    products: undefined,
    product: undefined
  }
);
