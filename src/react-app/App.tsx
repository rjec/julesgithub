// src/App.tsx
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Healthcare PWA</h1>
      </header>
      <nav className="app-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Appointments</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>
      <main className="app-main">
        <p>Welcome to our healthcare application.</p>
        {/* Add more sections/components here as needed */}
        <section>
          <h2>Your Health Summary</h2>
          <p>Details about your latest check-up, upcoming appointments, etc.</p>
        </section>
        <section>
          <h2>Quick Actions</h2>
          <ul>
            <li>Book New Appointment</li>
            <li>Refill Prescription</li>
            <li>View Test Results</li>
          </ul>
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2023 Healthcare Services</p>
      </footer>
    </div>
  );
}

export default App;
