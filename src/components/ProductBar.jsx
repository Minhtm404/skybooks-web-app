import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Label, TextInput } from 'flowbite-react';

import { Context as ProductContext } from '../contexts/ProductContext';

const ProductBar = () => {
  const { alias } = useParams();
  const { getAllProducts } = useContext(ProductContext);

  const [keyword, setKeyword] = useState(undefined);

  return (
    <div class="bg-white block sm:flex Dropdown.Items-center justify-between border-b border-gray-200 lg:mt-1.5 py-4">
      <div class="w-full mb-1">
        <div class="Dropdown.Items-center justify-between block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
          <div class="flex Dropdown.Items-center mb-4 sm:mb-0">
            <Label htmlFor="products-search" className="sr-only" />
            <div class="relative w-48 mt-1 sm:w-64 xl:w-96">
              <TextInput
                id="products-search"
                name="products-search"
                placeholder="Search product..."
                type="search"
                value={keyword}
                onChange={e => {
                  setKeyword(e.target.value);
                  getAllProducts({ category: alias, keyword: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBar;
