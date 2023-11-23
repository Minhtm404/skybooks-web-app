import contextFactory from './ContextFactory';
import { ACTIONS } from '../constants';
import apiHelper from '../utils/apiHelper';

const cartItemReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ACTIONS.SET_CART_ITEMS:
      return { ...state, isLoading: false, cartItems: action.payload };
    default:
      return state;
  }
};

const setIsLoading = dispatch => async isLoading => {
  dispatch({ type: ACTIONS.SET_IS_LOADING, payload: isLoading });
};

const getAllCartItems = dispatch => async () => {
  try {
    const { data } = await apiHelper.get(`/users/cart`);

    dispatch({ type: ACTIONS.SET_CART_ITEMS, payload: data.data });
  } catch (err) {
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: err.response ? err.response.data.message : err.message
    });
  }
};

const addCartItem =
  dispatch =>
  async ({ product, quantity }) => {
    try {
      await apiHelper.post(`/users/cart`, {
        product,
        quantity
      });

      const { data } = await apiHelper.get(`/users/cart`);

      dispatch({ type: ACTIONS.SET_CART_ITEMS, payload: data.data });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: err.response ? err.response.data.message : err.message
      });
    }
  };

const updateCartItem =
  dispatch =>
  async ({ cartItemId, quantity }) => {
    try {
      await apiHelper.patch(`/users/cart/${cartItemId}`, {
        quantity
      });

      const { data } = await apiHelper.get(`/users/cart`);

      dispatch({ type: ACTIONS.SET_CART_ITEMS, payload: data.data });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: err.response ? err.response.data.message : err.message
      });
    }
  };

export const { Provider, Context } = contextFactory(
  cartItemReducer,
  {
    setIsLoading,
    getAllCartItems,
    addCartItem,
    updateCartItem
  },
  {
    isLoading: false,
    error: undefined,
    cartItems: undefined
  }
);
