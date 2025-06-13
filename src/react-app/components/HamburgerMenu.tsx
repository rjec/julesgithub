
import React from 'react';
import { NavItem } from '../types';
import { CloseIcon } from '../constants';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  appTitle: string;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose, navItems, appTitle }) => {
  if (!isOpen) return null;

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-[90]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hamburger-menu-title"
    >
      <div 
        className="fixed top-0 left-0 w-full max-w-xs h-full bg-gray-800 shadow-xl p-6 flex flex-col text-gray-100 transform transition-transform duration-300 ease-in-out"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
        onClick={handleContentClick}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="hamburger-menu-title" className="text-xl font-semibold text-indigo-300">{appTitle} Menu</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700" aria-label="Close menu">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        <nav>
          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.action ? (
                  <button
                    onClick={() => {
                      if (item.action) item.action();
                      onClose(); // Close menu after action
                    }}
                    className="w-full text-left py-3 px-3 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors text-lg"
                  >
                    {item.label}
                  </button>
                ) : (
                  <div className="py-3 px-3 text-lg">{item.label}</div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
