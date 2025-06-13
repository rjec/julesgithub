import { useState } from 'react';
import GuideToDrugTestPreparation from './guide-to-drug-test-preparation';
import FirebaseStudioAnnouncement from './firebase-studio-announcement';
import './App.css';

function App() {
  const [currentPost, setCurrentPost] = useState('drugTestGuide');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Blog</h1>
        <nav>
          <button onClick={() => setCurrentPost('drugTestGuide')}>
            Drug Test Guide
          </button>
          <button onClick={() => setCurrentPost('firebaseStudio')}>
            What's New
          </button>
        </nav>
      </header>
      <main>
        {currentPost === 'drugTestGuide' ? (
          <GuideToDrugTestPreparation />
        ) : (
          <FirebaseStudioAnnouncement />
        )}
      </main>
      <footer className="App-footer">
        <p>Contact us at (123) 456-7890 or support@healthco.com</p>
      </footer>
    </div>
  );
}

export default App;
