import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Carousel, Spinner, Toast } from 'flowbite-react';
import { HiExclamation } from 'react-icons/hi';

import { Context as ProductContext } from '../contexts/ProductContext';

const Home = () => {
  const {
    architectureProducts,
    artProducts,
    getAllArchitectureProducts,
    getAllArtProducts,
    isLoading,
    setIsLoading,
    error
  } = useContext(ProductContext);

  useEffect(() => {
    setIsLoading(true);
    getAllArchitectureProducts({});
    setIsLoading(true);
    getAllArtProducts({});
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }
console.log(architectureProducts, artProducts)
  if (architectureProducts && artProducts) {
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

        <div style={{ height: 900 }}>
          <Carousel indicators={false} className="h-full">
            <img src="fullsizerender_19_be8a22897dfe4aa58443693d6de2da47.jpg" alt="" />
            <img src="sale_off_banner_b7d0caf598e7497d99bbccb25c6c9ede.jpg" alt="" />
            <img src="sale_off_banner2_f6407ef7175147969589848aceecef39.jpg" alt="" />
          </Carousel>
        </div>

        <div className="mx-40 px-6 py-8 grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="uppercase text-3xl">Architecture</p>
            <Button as={Link} to={'/collections/books'} className="uppercase">
              See more
            </Button>
          </div>

          {architectureProducts.slice(0, 6).map(i => (
            <Card
              imgSrc={`${i.imageCover}/-/scale_crop/521x600/-/format/auto/-/quality/smart_retina/`}
              href={`/products/${i.slug}`}
            >
              <p className="uppercase text-sm">{i.name}</p>
              <p className="text-sm font-semibold">
                {Number(i.price)?.toLocaleString().concat('₫')}
              </p>
            </Card>
          ))}
        </div>
      </div>
    );
  }
};

export default Home;
