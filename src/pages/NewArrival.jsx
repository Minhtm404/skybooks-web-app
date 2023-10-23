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

        <div className="grid grid-cols-4 gap-4">
          {products.map(p => (
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://product.hstatic.net/200000090679/product/a11eaq8thkl_757a0ddca7b74dc7b30dfd32680930be_grande.jpg"
            >
              <h5 className="font-bold tracking-tight text-gray-900">
                <p className="uppercase">
                  {p.name.length > 25 ? p.name.slice(0, 25).concat('...') : p.name}
                </p>
              </h5>
              <p className="font-normal text-gray-700">
                <p>{p.price.toLocaleString().concat('₫')}</p>
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
