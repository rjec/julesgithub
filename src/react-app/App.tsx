
import React, { useState, useCallback } from 'react';
import { TabId, FlashcardItem } from './types';
import { HAMBURGER_MENU_ITEMS, HELP_MODAL_TITLE, AI_CHATBOT_PROMPT, HUMAN_CONTACT_PROMPT, PHONE_NUMBER, APP_TITLE, TAB_CONFIG, COPYRIGHT_INFO_2011, COPYRIGHT_INFO_2024, COMPLEX_ISSUES_TEXT, COMPLEX_ISSUES_URL, ChatBubbleIcon, PhoneOutgoingIcon, MenuIcon, HelpIcon } from './constants';
import TopNavigationBar from './components/TopNavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar';
import Modal from './components/Modal';
import HomePage from './components/HomePage';
import BusinessPage from './components/BusinessPage';
import PersonalPage from './components/PersonalPage';
import LegalPage from './components/LegalPage';
import HamburgerMenu from './components/HamburgerMenu';
import HelpModal from './components/HelpModal';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.Home);
  const [modalData, setModalData] = useState<FlashcardItem | null>(null);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const handleOpenModal = useCallback((data: FlashcardItem) => {
    setModalData(data);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalData(null);
  }, []);

  const toggleHamburgerMenu = useCallback(() => {
    setIsHamburgerMenuOpen(prev => !prev);
  }, []);

  const toggleHelpModal = useCallback(() => {
    setIsHelpModalOpen(prev => !prev);
    if(isHamburgerMenuOpen) setIsHamburgerMenuOpen(false); // Close hamburger if help modal opens from it
  }, [isHamburgerMenuOpen]);

  const renderContent = () => {
    switch (activeTab) {
      case TabId.Home:
        return <HomePage onOpenModal={handleOpenModal} />;
      case TabId.Business:
        return <BusinessPage />; // BusinessPage now manages its own modals
      case TabId.Personal:
        return <PersonalPage />; // PersonalPage now manages its own modals
      case TabId.Legal:
        return <LegalPage />; // LegalPage now manages its own modals
      default:
        return <HomePage onOpenModal={handleOpenModal} />;
    }
  };
  
  const hamburgerMenuItems = React.useMemo(() => HAMBURGER_MENU_ITEMS(toggleHelpModal, handleOpenModal), [toggleHelpModal, handleOpenModal]);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      <TopNavigationBar
        title={APP_TITLE}
        onMenuClick={toggleHamburgerMenu}
        onHelpClick={toggleHelpModal}
        MenuIcon={<MenuIcon className="w-7 h-7 text-indigo-300 hover:text-indigo-200"/>}
        HelpIcon={<HelpIcon className="w-7 h-7 text-indigo-300 hover:text-indigo-200"/>}
      />

      <main className="flex-1 overflow-hidden p-4 md:p-6">
        {renderContent()}
      </main>

      <div className="text-center text-xs text-gray-500 py-2 px-4 border-t border-gray-700">
          <p>{COPYRIGHT_INFO_2011} / {COPYRIGHT_INFO_2024}</p>
          <p>
            {COMPLEX_ISSUES_TEXT.split('labtestingsolutions.help')[0]}
            <a href={COMPLEX_ISSUES_URL} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">
              labtestingsolutions.help
            </a>
            {COMPLEX_ISSUES_TEXT.split('labtestingsolutions.help')[1]}
          </p>
      </div>

      <BottomNavigationBar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={TAB_CONFIG}
      />

      {modalData && (
        <Modal title={modalData.modalTitle} onClose={handleCloseModal}>
          {modalData.modalContent}
        </Modal>
      )}

      {isHamburgerMenuOpen && (
        <HamburgerMenu
          isOpen={isHamburgerMenuOpen}
          onClose={toggleHamburgerMenu}
          navItems={hamburgerMenuItems}
          appTitle={APP_TITLE}
        />
      )}

      {isHelpModalOpen && (
        <HelpModal
          isOpen={isHelpModalOpen}
          onClose={toggleHelpModal}
          title={HELP_MODAL_TITLE}
          aiPrompt={AI_CHATBOT_PROMPT}
          humanPrompt={HUMAN_CONTACT_PROMPT}
          phoneNumber={PHONE_NUMBER}
          ChatIcon={<ChatBubbleIcon className="w-5 h-5 mr-2" />}
          PhoneIcon={<ChatBubbleIcon className="w-5 h-5 mr-2" />} /* Changed from PhoneOutgoingIcon */
        />
      )}
    </div>
  );
};

export default App;
