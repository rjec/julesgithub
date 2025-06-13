
import React from 'react';

interface TopNavigationBarProps {
  title: string;
  onMenuClick: () => void;
  onHelpClick: () => void;
  MenuIcon: React.ReactNode;
  HelpIcon: React.ReactNode;
}

const TopNavigationBar: React.FC<TopNavigationBarProps> = ({ title, onMenuClick, onHelpClick, MenuIcon, HelpIcon }) => {
  return (
    <header className="bg-gray-800 shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md hover:bg-gray-700 transition-colors"
          aria-label="Open menu"
        >
          {MenuIcon}
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-indigo-300">{title}</h1>
        <button
          onClick={onHelpClick}
          className="p-2 rounded-md hover:bg-gray-700 transition-colors flex items-center text-sm font-medium"
          aria-label="Help"
        >
          {HelpIcon}
          <span className="ml-1 hidden sm:inline">HELP</span>
        </button>
      </div>
    </header>
  );
};

export default TopNavigationBar;
