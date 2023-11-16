import React, { useContext, useEffect } from 'react';
import { Breadcrumb, Card, Spinner, Toast } from 'flowbite-react';
import { HiExclamation, HiHome } from 'react-icons/hi';

import { Context as ProductContext } from '../contexts/ProductContext';

import { ProductBar } from '../components/index';

const NewArrival = () => {
  const { products, getAllProducts, isLoading, setIsLoading, error } =
    useContext(ProductContext);

  useEffect(() => {
    setIsLoading(true);
    getAllProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (products) {
    return (
      <div>
        {error ? (
          <Toast className="absolute top-4 left-4">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{error}</div>
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
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/new-arrival">New Arrival</Breadcrumb.Item>
          </div>
        </Breadcrumb>

        <div className="mx-40 px-5 py-3">
          <p className="text-3xl font-semibold my-5">New Arrival</p>

          <ProductBar />

          <div className="py-4 grid grid-cols-4 gap-4">
            {products.map(p => {
              const href = `/products/${p.slug}`;

              return (
                <Card
                  imgSrc="https://product.hstatic.net/200000090679/product/a11eaq8thkl_757a0ddca7b74dc7b30dfd32680930be_grande.jpg"
                  href={href}
                >
                  <p className="uppercase text-sm">{p.name}</p>
                  <p className="text-sm font-semibold">
                    {p.price?.toLocaleString().concat('₫')}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default NewArrival;
