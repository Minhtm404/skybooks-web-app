import contextFactory from './ContextFactory';
import { ACTIONS } from '../constants';
import apiHelper from '../utils/apiHelper';

const orderReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ACTIONS.SET_ORDERS:
      return { ...state, isLoading: false, orders: action.payload };
    default:
      return state;
  }
};

const setIsLoading = dispatch => async isLoading => {
  dispatch({ type: ACTIONS.SET_IS_LOADING, payload: isLoading });
};

const getAllOrders = dispatch => async () => {
  try {
    const { data } = await apiHelper.get(`/users/orders`);

    dispatch({ type: ACTIONS.SET_CART_ITEMS, payload: data.data });
  } catch (err) {
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: err.response ? err.response.data.message : err.message
    });
  }
};

const createOrder =
  dispatch =>
  async ({ name, phoneNumber, address, products, price }) => {
    try {
      await apiHelper.post(`/users/orders`, {
        name,
        phoneNumber,
        address,
        products,
        price
      });

      const { data } = await apiHelper.get(`/users/orders`);

      dispatch({ type: ACTIONS.SET_CART_ITEMS, payload: data.data });
    } catch (err) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: err.response ? err.response.data.message : err.message
      });
    }
  };

export const { Provider, Context } = contextFactory(
  orderReducer,
  {
    setIsLoading,
    getAllOrders,
    createOrder
  },
  {
    isLoading: false,
    error: undefined,
    orders: undefined
  }
);
