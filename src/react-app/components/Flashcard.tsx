
import React from 'react';
import { FlashcardItem } from '../types';

interface FlashcardProps {
  item: FlashcardItem;
  onOpenModal: (item: FlashcardItem) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ item, onOpenModal }) => {
  return (
    <button
      onClick={() => onOpenModal(item)}
      className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-indigo-500/30 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 text-left w-full h-full flex flex-col justify-between"
      aria-haspopup="dialog"
    >
      <div>
        <h3 className="text-lg font-semibold text-indigo-300 mb-2">{item.title}</h3>
        {item.shortInfo && <p className="text-sm text-gray-400 mb-2">{item.shortInfo}</p>}
      </div>
      <p className="text-xs text-indigo-400 mt-auto self-start pt-2">Tap for details &rarr;</p>
    </button>
  );
};

export default Flashcard;
