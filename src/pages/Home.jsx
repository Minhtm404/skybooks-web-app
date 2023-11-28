import React, { useContext, useEffect, useState } from 'react';
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

  const [aboutUsHovered, setAboutUsHovered] = useState(false);
  const [ourProductsHovered, setOurProductsHovered] = useState(false);

  const aboutUsHover = () => {
    setAboutUsHovered(!aboutUsHovered);
  };

  const ourProductHover = () => {
    setOurProductsHovered(!ourProductsHovered);
  };

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
  console.log(architectureProducts, artProducts);
  if (architectureProducts && artProducts) {
    return (
      <div className="space-y-8 mb-8">
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

        <div className="mx-40 px-6 grid grid-cols-3 gap-4">
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

        <div
          className="h-screen flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('moi_thang1cuonsach_ef78e380c04740038f279806c8af0015.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="items-center justify-center flex flex-col gap-4">
            <p className="text-white text-2xl uppercase">Books of the month</p>
            <p className="text-white">
              Every month, some books will be chosen by Skybooks and giving out detail
              information. It helps you save time.
            </p>
            <Button as={Link} to={`/new-arrival`} color="light" className="uppercase">
              This month recommendation
            </Button>
          </div>
        </div>

        <div className="mx-40 px-6 grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="uppercase text-3xl">Art</p>
            <Button as={Link} to={'/collections/books'} className="uppercase">
              See more
            </Button>
          </div>

          {artProducts.slice(0, 6).map(i => (
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

        <div className="mx-40 px-6 grid grid-cols-2 gap-4">
          <Link to={`/about-us`}>
            <div
              className="h-auto relative"
              onMouseEnter={aboutUsHover}
              onMouseLeave={aboutUsHover}
              style={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <img
                src={`about_us_489a2488ef21403788714cb33dbe16ca.jpg`}
                alt="Background"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
                    aboutUsHovered ? 0.5 : 0
                  }), rgba(0, 0, 0, ${aboutUsHovered ? 0.5 : 0}))`
                }}
              ></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h2 className="text-white text-2xl font-medium uppercase">About us</h2>
              </div>
            </div>
          </Link>

          <Link to={`/collections/books`}>
            <div
              className="h-auto relative"
              onMouseEnter={ourProductHover}
              onMouseLeave={ourProductHover}
              style={{
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <img
                src={`about_us_489a2488ef21403788714cb33dbe16ca.jpg`}
                alt="Background"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, ${
                    ourProductsHovered ? 0.5 : 0
                  }), rgba(0, 0, 0, ${ourProductsHovered ? 0.5 : 0}))`
                }}
              ></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h2 className="text-white text-2xl font-medium uppercase">
                  Our products
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
};

export default Home;
