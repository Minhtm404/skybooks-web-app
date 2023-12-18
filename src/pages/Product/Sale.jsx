import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Breadcrumb, Card, Pagination, Spinner, Toast } from 'flowbite-react';
import { HiExclamation, HiHome } from 'react-icons/hi';

import { Context as ProductContext } from '../../contexts/ProductContext';

import { ProductBar } from '../../components/index';

const Sale = () => {
  const { products, totalProducts, getAllProducts, isLoading, setIsLoading, error } =
    useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getAllProducts({ page: currentPage, limit: 100 });
  }, []);

  const [t, i18n] = useTranslation('global');

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
              {t('body.home')}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/sale">{t('header.sale')}</Breadcrumb.Item>
          </div>
        </Breadcrumb>

        <div className="mx-40 px-6 py-4 mb-4 flex flex-col">
          <p className="text-3xl font-semibold my-5">{t('header.sale')}</p>

          <ProductBar />

          <div className="py-4 grid grid-cols-4 gap-4">
            {products
              .filter(p => p.discount && p.discount > 0)
              .sort((a, b) => a.discount - b.discount)
              .map(p => (
                <Card
                  imgSrc={`${p.imageCover}/-/scale_crop/521x600/-/format/auto/-/quality/smart_retina/`}
                  href={`/products/${p.slug}`}
                >
                  <p className="uppercase text-sm">{p.name}</p>
                  <div>
                    <p className="text-sm font-semibold flex gap-2">
                      {p.priceDiscount?.toLocaleString().concat('₫')}
                      <Badge color="failure" className="w-fit">{`-${p.discount}%`}</Badge>
                    </p>
                    <p className="text-sm line-through text-gray-500">
                      {p.price?.toLocaleString().concat('₫')}
                    </p>
                  </div>
                </Card>
              ))}
          </div>

          {products.length === 0 ? <div>{t('products.no_product')}</div> : <></>}

          <Pagination
            currentPage={currentPage}
            totalPages={Number.parseInt(
              products.filter(p => p.discount && p.discount > 0).length / 10
            )}
            onPageChange={page => setCurrentPage(page)}
            previousLabel={t('products.previous_label')}
            nextLabel={t('products.next_label')}
            className="self-end"
            showIcons
          />
        </div>
      </div>
    );
  }
};

export default Sale;
