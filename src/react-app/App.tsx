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
      icon: '🧪', // Emoji for Self Test
    },
    {
      title: 'Business Admin',
      description: 'Clients, HR, officers, attorneys,',
      details: 'Comprehensive testing solutions for businesses and legal professionals.',
      icon: '💼', // Emoji for Business Admin
    },
    {
      title: 'Barcodes & Results',
      description: 'Understand your barcode and results.',
      details: 'How to use your barcode to track your test and interpret the results.',
      icon: '📊', // Emoji for Barcodes & Results
    },
  ];

  const importantInfo = [
    { text: 'Your barcode is valid at any respective lab collection site (e.g., Quest barcodes at Quest sites).' },
    { text: 'Collection sites should NEVER ask for payment directly; they are compensated by lab partners.' },
    { text: 'If a site issue forces you to purchase a new test, request a refund for the unused one via our support channels.' },
    { text: 'Switching between lab brands (Quest to LabCorp or vice-versa) requires contacting support (allow 24 hours).' },
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
    <div>
      <header>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '2rem', marginRight: '0.5rem' }}>🏥</span>
            <h1>Lab Testing Solutions</h1>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button>SMS</button>
            <button onClick={openLocationsModal}>LOCATION</button>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {flashcards.map((card, index) => (
            <div key={index} className="flashcard" onClick={() => handleCardClick(card.title, card.details)}>
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <div className="info-card">
          <h2>Comparing Quest & LabCorp</h2>
          <div>
            <h3>Important Testing Information</h3>
            {importantInfo.map((item, index) => (
              <div key={index} className="info-item">
                <span>-</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
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
