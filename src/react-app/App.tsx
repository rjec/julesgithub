import { useState } from 'react';
import Modal from './Modal';
import LocationsModal from './LocationsModal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [locationsModalOpen, setLocationsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const flashcards = [
    {
      title: 'Self Test',
      description: 'Probation to legal matters.',
      details: 'Detailed information about self-testing procedures and legal implications.',
      icon: 'path-to-self-test-icon.svg', // Replace with actual icon path
    },
    {
      title: 'Business Admin',
      description: 'Clients, HR, officers, attorneys,',
      details: 'Comprehensive testing solutions for businesses and legal professionals.',
      icon: 'path-to-business-admin-icon.svg', // Replace with actual icon path
    },
    {
      title: 'Barcodes & Results',
      description: 'Understand your barcode and results.',
      details: 'How to use your barcode to track your test and interpret the results.',
      icon: 'path-to-barcodes-icon.svg', // Replace with actual icon path
    },
  ];

  const importantInfo = [
    { text: 'Your barcode is valid at any respective lab collection site (e.g., Quest barcodes at Quest sites).', icon: 'info-icon' },
    { text: 'Collection sites should NEVER ask for payment directly; they are compensated by lab partners.', icon: 'payment-icon' },
    { text: 'If a site issue forces you to purchase a new test, request a refund for the unused one via our support channels.', icon: 'refund-icon' },
    { text: 'Switching between lab brands (Quest to LabCorp or vice-versa) requires contacting support (allow 24 hours).', icon: 'switch-icon' },
  ];

  const handleCardClick = (title: string, details: string) => {
    setModalContent({ title, content: details });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openLocationsModal = () => {
    setLocationsModalOpen(true);
  };

  const closeLocationsModal = () => {
    setLocationsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-primary-bg text-primary-text font-sans">
      <header className="bg-secondary-bg shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            {/* Replace with actual logo */}
            <svg className="w-8 h-8 text-brand-medium-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h1 className="text-xl font-bold">Lab Testing Solutions</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-brand-medium-blue border border-brand-medium-blue rounded-full hover:bg-brand-medium-blue hover:text-white transition">SMS</button>
            <button onClick={openLocationsModal} className="px-4 py-2 text-sm font-medium text-brand-medium-blue border border-brand-medium-blue rounded-full hover:bg-brand-medium-blue hover:text-white transition">LOCATION</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {flashcards.map((card, index) => (
            <div key={index} className="bg-brand-dark-blue text-white p-6 rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform" onClick={() => handleCardClick(card.title, card.details)}>
              {/* Replace with actual icon */}
              <div className="text-4xl mb-4">Icon</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{card.description}</p>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                Flip for details
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary-bg p-6 rounded-lg shadow-lg border-l-4 border-brand-medium-blue">
          <h2 className="text-2xl font-bold mb-4">Comparing Quest & LabCorp</h2>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Important Testing Information</h3>
            {importantInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                {/* Replace with actual icon */}
                <div className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded-full"></div>
                <p className="text-secondary-text">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-text mt-4">Comparing Quest and LabCorp for drug testing. Appointments are highly recommended.</p>
        </div>
      </main>
      <Modal isOpen={modalOpen} onClose={closeModal} title={modalContent.title}>
        <p>{modalContent.content}</p>
      </Modal>
      <LocationsModal isOpen={locationsModalOpen} onClose={closeLocationsModal} />
    </div>
  );
};

export default App;
