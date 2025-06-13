import React from 'react';
import { ProductCatalogItem } from '../types';

interface LegalCatalogCardProps {
  item: ProductCatalogItem;
  onClick: (item: ProductCatalogItem) => void;
  // howItWorksSteps prop is removed, now part of item
}

const LegalCatalogCard: React.FC<LegalCatalogCardProps> = ({ item, onClick }) => {

  return (
    <button
      onClick={() => onClick(item)}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-indigo-500/40 hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 text-left w-full flex flex-col h-full"
      aria-haspopup="dialog"
      aria-label={`View details for ${item.productName}`}
    >
      <div className="relative h-36 sm:h-40 md:h-32 lg:h-36 w-full">
        <img 
          src={item.cardImage} 
          alt={`${item.cardTitle} card image`} 
          className="object-cover w-full h-full" 
        />
        <div className="absolute top-1 left-1 bg-red-600 text-white text-[11px] sm:text-xs font-semibold py-1 px-2 rounded-md shadow-md">
          {item.cardTitle}
        </div>
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-indigo-300 font-semibold text-base md:text-lg mb-1 leading-tight">{item.productName}</h3>
          <p className="text-green-400 font-bold text-lg md:text-xl mt-1 mb-3">{item.price}</p>
        </div>
        
        {item.howItWorksSteps && item.howItWorksSteps.length > 0 && (
          <div className="mt-2 text-sm text-gray-400">
            <h4 className="font-semibold text-gray-300 mb-1.5 text-sm">How It Works:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              {item.howItWorksSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </button>
  );
};

export default LegalCatalogCard;
