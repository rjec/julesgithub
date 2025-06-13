import React, { useState } from 'react';
import { ProductCatalogItem } from '../types';
import { RefreshCwIcon, InfoIcon } from '../constants.tsx'; // Assuming these icons are added to constants

interface PersonalProductCardProps {
  item: ProductCatalogItem;
  onViewDetails: (item: ProductCatalogItem) => void;
}

const PersonalProductCard: React.FC<PersonalProductCardProps> = ({ item, onViewDetails }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggleFlip = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click if a button inside is clicked
    setIsFlipped(!isFlipped);
  };

  const handleViewDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails(item);
  };

  return (
    <div
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 text-left w-full flex flex-col h-full focus:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-opacity-75"
      role="listitem"
      aria-label={`Product: ${item.productName}`}
    >
      {!isFlipped ? (
        // Front of the card
        <>
          <div className="relative h-36 sm:h-40 w-full">
            <img 
              src={item.cardImage} 
              alt={`${item.cardTitle} card image`} 
              className="object-cover w-full h-full" 
            />
            <div className="absolute top-1 left-1 bg-indigo-600 text-white text-[11px] sm:text-xs font-semibold py-1 px-2 rounded-md shadow-md">
              {item.cardTitle}
            </div>
          </div>
          <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between">
            <div>
              <h3 className="text-indigo-300 font-semibold text-base md:text-lg mb-1 leading-tight">{item.productName}</h3>
              <p className="text-green-400 font-bold text-lg md:text-xl mt-1 mb-3">{item.price}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mt-2">
              <button
                onClick={handleToggleFlip}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-indigo-300 font-medium py-2 px-3 rounded-md text-xs sm:text-sm transition-colors flex items-center justify-center"
                aria-label={`Show how to process for ${item.productName}`}
              >
                <RefreshCwIcon className="w-4 h-4 mr-1.5" /> How To
              </button>
              <button
                onClick={handleViewDetailsClick}
                className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-3 rounded-md text-xs sm:text-sm transition-colors flex items-center justify-center"
                aria-label={`View details for ${item.productName}`}
              >
                 <InfoIcon className="w-4 h-4 mr-1.5" /> View Details
              </button>
            </div>
          </div>
        </>
      ) : (
        // Back of the card (How To steps)
        <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between h-full">
          <div>
            <h4 className="text-indigo-300 font-semibold text-base md:text-lg mb-2">How It Works: {item.productName}</h4>
            {item.howToSteps && item.howToSteps.length > 0 ? (
              <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                {item.howToSteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-gray-400">No specific steps provided for this product.</p>
            )}
          </div>
          <button
            onClick={handleToggleFlip}
            className="mt-4 bg-gray-700 hover:bg-gray-600 text-indigo-300 font-medium py-2 px-3 rounded-md text-xs sm:text-sm transition-colors w-full flex items-center justify-center"
            aria-label={`Show product information for ${item.productName}`}
          >
            <InfoIcon className="w-4 h-4 mr-1.5" /> Product Info
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalProductCard;
