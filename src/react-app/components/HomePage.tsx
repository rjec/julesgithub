
import React from 'react';
import { FlashcardItem } from '../types';
import { HOME_WELCOME_BANNER, HOME_TAGLINE, HOME_MOTTO, HOME_FLASHCARDS } from '../constants';
import Flashcard from './Flashcard';

interface HomePageProps {
  onOpenModal: (data: FlashcardItem) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onOpenModal }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="mb-6 md:mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-300 mb-3">{HOME_WELCOME_BANNER}</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">{HOME_TAGLINE}</p>
        <p className="text-lg sm:text-xl md:text-2xl italic text-indigo-400">{HOME_MOTTO}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl px-2">
        {HOME_FLASHCARDS.map(item => (
          <Flashcard key={item.id} item={item} onOpenModal={onOpenModal} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
