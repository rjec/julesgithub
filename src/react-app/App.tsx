import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    testType: 'urine',
    date: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitted(false);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'An unexpected error occurred.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Drug Testing Services</h1>
        <p>Schedule your appointment with us</p>
      </header>
      <main>
        {submitted ? (
          <div className="submission-success">
            <h2>Thank You!</h2>
            <p>Your appointment request has been submitted successfully.</p>
            <p>We will contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="appointment-form">
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="testType">Type of Test</label>
              <select
                id="testType"
                name="testType"
                value={formData.testType}
                onChange={handleChange}
              >
                <option value="urine">Urine Test</option>
                <option value="hair">Hair Test</option>
                <option value="saliva">Saliva Test</option>
                <option value="blood">Blood Test</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Request Appointment</button>
          </form>
        )}
      </main>
      <footer className="App-footer">
        <p>Contact us at (123) 456-7890 or support@healthco.com</p>
      </footer>
    </div>
  );
}

export default App;
