import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Context as ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { alias } = useParams();
  const { product, getProductByAlias } = useContext(ProductContext);

  useEffect(() => {
    getProductByAlias(alias);
  }, []);

  return <div>ProductDetails</div>;
};

export default ProductDetails;
