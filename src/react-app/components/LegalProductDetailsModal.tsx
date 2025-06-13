
import React from 'react';
import { ProductCatalogItem } from '../types'; // Updated type
import Modal from './Modal'; 


interface LegalProductDetailsModalProps {
  item: ProductCatalogItem | null; // Updated type
  onClose: () => void;
}

const LegalProductDetailsModal: React.FC<LegalProductDetailsModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const { modalDetails } = item;

  return (
    <Modal title="" onClose={onClose}> {/* Title is handled inside or removed if modal structure changes */}
      <div className="flex flex-col md:flex-row gap-6 max-h-[85vh]">
        <div className="md:w-2/5 flex-shrink-0">
          <img 
            src={modalDetails.image} 
            alt={modalDetails.title} 
            className="rounded-lg object-contain w-full h-auto max-h-64 md:max-h-full shadow-lg"
          />
        </div>
        <div className="md:w-3/5 flex flex-col overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          <h2 className="text-2xl lg:text-3xl font-bold text-indigo-300 mb-1">{modalDetails.title}</h2>
          {modalDetails.subtitle && <p className="text-md lg:text-lg text-gray-400 mb-3">{modalDetails.subtitle}</p>}
          <p className="text-2xl font-bold text-green-400 mb-4">{modalDetails.price}</p>
          
          <a 
            href={modalDetails.orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-5 rounded-lg text-base sm:text-lg text-center transition-colors mb-1 w-full sm:w-auto"
            aria-label={`Order ${modalDetails.title} now`}
          >
            ORDER NOW 🛒
          </a>
          {modalDetails.orderLinkDomainInfo && <p className="text-xs text-gray-500 text-center sm:text-left mb-4">{modalDetails.orderLinkDomainInfo}</p>}
          
          <div className="text-gray-300 leading-relaxed text-sm break-words">
            {modalDetails.description}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LegalProductDetailsModal;