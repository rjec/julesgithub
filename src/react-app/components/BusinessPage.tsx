import React, { useState } from 'react';
import { ProductCatalogItem } from '../types';
import { BUSINESS_MAIN_TITLE, BUSINESS_PRODUCTS_CATALOG } from '../constants';
import LegalCatalogCard from './LegalCatalogCard';
import LegalProductDetailsModal from './LegalProductDetailsModal';

const BusinessPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCatalogItem | null>(null);

  const handleOpenProductModal = (product: ProductCatalogItem) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <header className="text-center mb-4 md:mb-6 px-2">
        <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-300 mb-2">
          {BUSINESS_MAIN_TITLE}
        </h1>
         <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Tailored testing solutions to meet corporate, pre-employment, and workplace safety program requirements.
        </p>
      </header>

      {BUSINESS_PRODUCTS_CATALOG.length > 0 ? (
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 px-4 sm:px-2">
          {/* Wrapper to center the grid */}
          <div className="mx-auto w-fit">
            {/* Cards Container */}
            <div
              className="
                grid grid-cols-1 gap-4 pt-2 pb-4
                sm:grid-cols-2 sm:gap-4
                md:grid-cols-3 md:gap-5
                lg:grid-cols-4 lg:gap-5
              "
              role="list"
            >
              {BUSINESS_PRODUCTS_CATALOG.map(product => (
                <div 
                  key={product.id} 
                  className="h-full"
                  role="listitem"
                >
                  <LegalCatalogCard
                    item={product}
                    onClick={handleOpenProductModal}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">No business testing products are currently listed.</p>
        </div>
      )}

      {selectedProduct && (
        <LegalProductDetailsModal
          item={selectedProduct}
          onClose={handleCloseProductModal}
        />
      )}
    </div>
  );
};

export default BusinessPage;