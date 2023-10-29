import contextFactory from './ContextFactory';
import { ACTIONS } from '../constants';
import apiHelper from '../utils/apiHelper';

const productReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.SET_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

const getAllProducts = dispacth => async () => {
  const data = await apiHelper.get('/products');

  dispacth({ type: ACTIONS.SET_PRODUCTS, payload: data.data.data });
};

const getProductByAlias = dispacth => async alias => {
  const data = await apiHelper.get(`/products/aliases/${alias}`);
  console.log(data);
  dispacth({ type: ACTIONS.SET_PRODUCT, payload: data.data.data });
};

export const { Provider, Context } = contextFactory(
  productReducer,
  {
    getAllProducts,
    getProductByAlias
  },
  {
    products: [],
    product: {}
  }
);
