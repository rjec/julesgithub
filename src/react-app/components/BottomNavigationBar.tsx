
import React from 'react';
import { TabId } from '../types';
import { TabConfig } from '../constants';


interface BottomNavigationBarProps {
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
  tabs: TabConfig[];
}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({ activeTab, onTabChange, tabs }) => {
  return (
    <nav className="bg-gray-800 shadow-top p-1 sticky bottom-0 z-50">
      <div className="container mx-auto flex justify-around items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-md transition-colors w-1/4
                        ${activeTab === tab.id ? 'text-indigo-400 scale-105' : 'text-gray-400 hover:text-indigo-300 hover:bg-gray-700'}`}
            aria-current={activeTab === tab.id ? "page" : undefined}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5">{tab.icon}</div>
            <span className="text-xs sm:text-sm font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigationBar;
