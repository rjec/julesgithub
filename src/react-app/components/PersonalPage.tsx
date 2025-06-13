
import React, { useState } from 'react';
import { ProductCatalogItem } from '../types';
import { PERSONAL_MAIN_TITLE, PERSONAL_SUB_TITLE, PERSONAL_PRODUCTS, SAMHSA_COMPLIANCE_HEADING, SAMHSA_COMPLIANCE_INFO } from '../constants';
import PersonalProductCard from './PersonalProductCard';
import LegalProductDetailsModal from './LegalProductDetailsModal'; // Reusing the modal from Legal page

const PersonalPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductCatalogItem | null>(null);

  const handleViewDetails = (product: ProductCatalogItem) => {
    setSelectedProduct(product);
  };

  const handleCloseDetailsModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <header className="text-center mb-4 md:mb-6 px-2">
        <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-300 mb-1">
          {PERSONAL_MAIN_TITLE}
        </h1>
        {PERSONAL_SUB_TITLE && (
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            {PERSONAL_SUB_TITLE}
          </p>
        )}
      </header>

      {PERSONAL_PRODUCTS.length > 0 ? (
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 pb-4">
          <div
            className="
              grid grid-cols-1 gap-4 px-4 pt-2
              sm:grid-cols-2 sm:gap-4 sm:px-2
              md:grid-cols-3 md:gap-5 
            "
            role="list"
          >
            {PERSONAL_PRODUCTS.map(product => (
              <div key={product.id} role="listitem" className="h-full">
                <PersonalProductCard
                  item={product}
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">No personal testing products are currently listed.</p>
        </div>
      )}
      
      <div className="p-3 my-4 mx-2 sm:mx-auto bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-sm sm:text-base max-w-lg">
        <h3 className="text-md font-semibold text-indigo-300 mb-2 text-center">{SAMHSA_COMPLIANCE_HEADING}</h3>
        <p className="text-gray-300 text-center leading-relaxed">{SAMHSA_COMPLIANCE_INFO}</p>
      </div>

      {selectedProduct && (
        <LegalProductDetailsModal
          item={selectedProduct}
          onClose={handleCloseDetailsModal}
        />
      )}
    </div>
  );
};

export default PersonalPage;
