import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb, Button, Carousel, TextInput } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

import { Context as ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const { alias } = useParams();
  const { product, getProductByAlias } = useContext(ProductContext);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getProductByAlias(alias);
  }, []);

  const increaseValue = () => {
    setQuantity(quantity + 1);
  };

  const decreaseValue = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
      >
        <div className="flex mx-40">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
          <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="mx-40 px-5 py-3 grid grid-cols-2 space-x-4">
        <div className="items-start">
          <Carousel>
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            />
            <img
              alt="..."
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            />
          </Carousel>
        </div>

        <div className="text-slate-900 space-y-4">
          <div>
            <p className="text-xl font-bold">{product.name}</p>
            <p className="text-sm">
              <span className="font-bold">SKU: </span>
              {product.sku}
            </p>
            <p className="text-sm">
              <span className="font-bold">Supplier: </span>
              {product.vendor}
            </p>
            {product.quantity === 0 ? <p className="text-sm">Out of stock</p> : <></>}
          </div>

          <hr />

          <div>
            <p className="font-bold" style={{ color: '#0e7490' }}>
              {product.price?.toLocaleString().concat('₫')}
            </p>
          </div>

          <hr />

          <div className="container mx-auto mt-10">
            <div className="flex items-center">
              <Button
                className="text-xs"
                size="sm"
                variant="gray"
                onClick={decreaseValue}
              >
                -
              </Button>
              <TextInput
                className="text-lg px-2 py-1 w-24"
                type="number"
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
              />
              <Button
                className="text-xs"
                size="sm"
                variant="gray"
                onClick={increaseValue}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
