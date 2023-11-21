import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb, Button, Carousel, Spinner, TextInput } from 'flowbite-react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiHome } from 'react-icons/hi';

import { Context as ProductContext } from '../../contexts/ProductContext';

const ProductDetails = () => {
  const { alias } = useParams();
  const { product, getProductByAlias, isLoading, setIsLoading, error } =
    useContext(ProductContext);

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

  if (isLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (product) {
    return (
      <div className="my-4">
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

        <div className="mx-40 mb-20 px-5 py-3 grid grid-cols-2 space-x-4">
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

            <div className="flex items-center border-2 rounded w-fit">
              <button
                onClick={() => decreaseValue()}
                className="px-2 dark:border-gray-600 text-red-600"
              >
                <AiOutlineMinus />
              </button>
              <p className="px-2 border-x-2 dark:border-gray-600">{quantity}</p>
              <button
                onClick={() => increaseValue()}
                className="px-2 dark:border-gray-600 text-green-600"
              >
                <AiOutlinePlus />
              </button>
            </div>

            <hr />

            <Button className="uppercase w-full">Add to cart</Button>

            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-bold">Description</span>
              </p>
              <p className="text-sm">
                <span className="font-bold">Author: </span>
                {product.author}
              </p>
              <p className="text-sm">
                <span className="font-bold">Format: </span>
                {product.format}
              </p>
              <p className="text-sm">
                <span className="font-bold">Dimensions: </span>
                {product.dimensions}
              </p>
              <p className="text-sm">
                <span className="font-bold">Publish date: </span>
                {product.publishDate}
              </p>
              <p className="text-sm">{product.description}</p>
              <p className="text-sm">
                <span className="font-bold">PRODUCT REVIEWS</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-2xl font-medium my-8">RELATED PRODUCTS</div>
      </div>
    );
  }
};

export default ProductDetails;