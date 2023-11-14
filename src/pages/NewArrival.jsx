import React, { useContext, useEffect } from 'react';
import { Breadcrumb, Card } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

import { Context as ProductContext } from '../contexts/ProductContext';

import { ProductBar } from '../components/index';

const NewArrival = () => {
  const { products, getAllProducts } = useContext(ProductContext);

  useEffect(() => {
    getAllProducts();
  }, []);

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
                <p className="uppercase text-sm">
                  {p.price?.toLocaleString().concat('₫')}
                </p>
                <p className="text-sm font-semibold">{p.price}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
