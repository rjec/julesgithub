import { useState } from 'react';
import './App.css';
import Modal from './Modal'; // We will create this component next

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const flashcards = [
    {
      title: 'Service 1',
      description: 'Brief description of Service 1. Click to learn more.',
      details: 'Detailed information about Service 1. This will appear in the modal.',
    },
    {
      title: 'Service 2',
      description: 'Brief description of Service 2. Click to learn more.',
      details: 'Detailed information about Service 2. This will appear in the modal.',
    },
    {
      title: 'Service 3',
      description: 'Brief description of Service 3. Click to learn more.',
      details: 'Detailed information about Service 3. This will appear in the modal.',
    },
    {
        title: 'Service 4',
        description: 'Brief description of Service 4. Click to learn more.',
        details: 'Detailed information about Service 4. This will appear in the modal.',
    },
    {
        title: 'Service 5',
        description: 'Brief description of Service 5. Click to learn more.',
        details: 'Detailed information about Service 5. This will appear in the modal.',
    },
    {
        title: 'Service 6',
        description: 'Brief description of Service 6. Click to learn more.',
        details: 'Detailed information about Service 6. This will appear in the modal.',
    },
  ];

  const handleCardClick = (title: string, details: string) => {
    setModalContent({ title, content: details });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Our Services</h1>
        <p>Click on a card to learn more</p>
      </header>
      <main className="card-container">
        {flashcards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(card.title, card.details)}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </main>
      <Modal isOpen={modalOpen} onClose={closeModal} title={modalContent.title}>
        <p>{modalContent.content}</p>
      </Modal>
    </div>
  );
};

export default App;
