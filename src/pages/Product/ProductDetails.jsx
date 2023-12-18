import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Badge, Breadcrumb, Button, Spinner, Toast } from 'flowbite-react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiExclamation, HiHome } from 'react-icons/hi';

import { Context as AuthContext } from '../../contexts/AuthContext';
import { Context as ProductContext } from '../../contexts/ProductContext';
import { Context as CartItemContext } from '../../contexts/CartItemContext';

const ProductDetails = () => {
  const { alias } = useParams();

  const { user, isAuthenticated, localLogin } = useContext(AuthContext);

  const {
    product,
    getProductByAlias,
    isLoading: productIsLoading,
    setIsLoading: productSetIsLoading,
    error: productError
  } = useContext(ProductContext);

  const { cartItems, addCartItem, error: cartItemError } = useContext(CartItemContext);

  const [, setOpenCart] = useOutletContext();

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    localLogin();
    productSetIsLoading(true);
    getProductByAlias(alias);
  }, []);

  const [t, i18n] = useTranslation('global');

  if (productIsLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  const increaseValue = () => {
    setQuantity(quantity + 1);
  };

  const decreaseValue = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCard = async e => {
    e.preventDefault();
    if (!user || !isAuthenticated) {
      navigate('/account/login');
    } else {
      await addCartItem({ product: product._id, quantity });
      setQuantity(1);
      setOpenCart(true);
    }
  };

  if (product) {
    return (
      <div className="my-4">
        {productError || (cartItemError && cartItems) ? (
          <Toast className="absolute top-4 left-4">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              {productError || cartItemError}
            </div>
            <Toast.Toggle />
          </Toast>
        ) : (
          <></>
        )}

        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
        >
          <div className="flex mx-40">
            <Breadcrumb.Item href="/" icon={HiHome}>
              {t('body.home')}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/new-arrival">{t('body.products')}</Breadcrumb.Item>
            <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
          </div>
        </Breadcrumb>

        <div className="mx-40 mb-20 px-5 py-3 grid grid-cols-2 space-x-4">
          <div className="w-full">
            <img alt="" src={`${product.imageCover}/`} className="w-full" />
          </div>

          <div className="text-slate-900 space-y-4">
            <div>
              <p className="text-xl font-bold">{product.name}</p>
              <p className="text-sm">
                <span className="font-bold">SKU: </span>
                {product.sku}
              </p>
              <p className="text-sm">
                <span className="font-bold">{t('products.supplier')}: </span>
                {product.vendor}
              </p>
              {product.quantity === 0 ? (
                <p className="text-sm">{t('products.out_of_stock')}</p>
              ) : (
                <></>
              )}
            </div>

            <hr />

            <div className="flex gap-2">
              <p className="font-bold" style={{ color: '#0e7490' }}>
                {product.priceDiscount?.toLocaleString().concat('₫')}{' '}
              </p>
              {product.discount ? (
                <div className="flex gap-2">
                  <p className="line-through text-gray-500">
                    {product.price?.toLocaleString().concat('₫')}
                  </p>
                  <Badge
                    color="failure"
                    className="w-fit"
                  >{`-${product.discount}%`}</Badge>
                </div>
              ) : (
                <></>
              )}
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

            <Button onClick={handleAddToCard} className="uppercase w-full">
              {t('products.add_to_cart')}
            </Button>

            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-bold">{t('products.description')}</span>
              </p>
              <p className="text-sm">
                <span className="font-bold">{t('products.author')}: </span>
                {product.author}
              </p>
              <p className="text-sm">
                <span className="font-bold">{t('products.format')}: </span>
                {product.format}
              </p>
              <p className="text-sm">
                <span className="font-bold">{t('products.dimensions')}: </span>
                {product.dimensions}
              </p>
              <p className="text-sm">
                <span className="font-bold">{t('products.publish_date')}: </span>
                {product.publishDate}
              </p>
              <p className="text-sm text-justify">{product.description}</p>
              <p className="text-sm">
                <span className="font-bold uppercase">
                  {t('products.product_reviews')}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center uppercase text-2xl font-medium my-8">
          {t('products.related_products')}
        </div>
      </div>
    );
  }
};

export default ProductDetails;
