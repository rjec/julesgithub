import React, { useState } from 'react';
import { ProductCatalogItem } from '../types'; // Updated type
import { LEGAL_MAIN_TITLE, LEGAL_PRODUCTS_CATALOG } from '../constants.tsx';
import LegalCatalogCard from './LegalCatalogCard';
import LegalProductDetailsModal from './LegalProductDetailsModal';

const LegalPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCatalogItem | null>(null); // Updated type

  const handleOpenProductModal = (product: ProductCatalogItem) => { // Updated type
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <header className="text-center mb-4 md:mb-6 px-2">
        <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-300 mb-2">
          <span role="img" aria-label="Scales emoji" className="mr-2">⚖️</span>
          {LEGAL_MAIN_TITLE}
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Explore our range of legally admissible testing services. All tests are processed in federally approved labs. Secure and confidential.
        </p>
      </header>

      {LEGAL_PRODUCTS_CATALOG.length > 0 ? (
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
          {/* Cards Container */}
          <div
            className="
              grid grid-cols-1 gap-4 px-4 pt-2 pb-4 
              sm:grid-cols-2 sm:gap-4 sm:px-2 
              md:grid-cols-2 md:gap-5 
              lg:grid-cols-4 lg:gap-5
            "
            role="list"
          >
            {LEGAL_PRODUCTS_CATALOG.map(product => (
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
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">No legal testing products are currently listed.</p>
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

export default LegalPage;