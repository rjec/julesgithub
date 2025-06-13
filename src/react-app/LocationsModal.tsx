import React from 'react';

type LocationsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LocationsModal: React.FC<LocationsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-content">
            <h2>Find a Testing Location & Key Info</h2>
            <button onClick={onClose} className="close-button">&times;</button>
          </div>
          <p>Your barcode is flexible! Here's what you need to know about using it at Quest Diagnostics and LabCorp locations nationwide.</p>
        </div>
        
        <div className="modal-body">
          <div className="modal-grid">
            {/* Quest Tile */}
            <div className="location-tile">
              <h3>Quest Diagnostics</h3>
              <ul>
                <li><strong>Barcodes:</strong> Often feature a "Q" and/or numbers.</li>
                <li><strong>Network:</strong> Includes their Patient Service Centers (PSCs) & authorized third-party collection sites.</li>
                <li><strong>Payment:</strong> No payment is required at the collection site.</li>
              </ul>
              <button>Find Quest Diagnostics Locations</button>
            </div>

            {/* LabCorp Tile */}
            <div className="location-tile">
              <h3>LabCorp</h3>
              <ul>
                <li><strong>Barcodes:</strong> Typically all numeric.</li>
                <li><strong>Network:</strong> Primarily operates its own corporately-owned Patient Service Centers (PSCs).</li>
                <li><strong>Payment:</strong> No payment is required at the collection site.</li>
              </ul>
              <button>Find LabCorp Locations</button>
            </div>
          </div>

          <div className="reminders-card">
            <h3>Important Reminders</h3>
            <ul>
              <li><strong>No Payment at Site:</strong> Collection sites are compensated by our lab partners directly. You should NEVER be asked for payment at the facility.</li>
              <li><strong>Accidental Double Purchase?</strong> If a site issue forced you to purchase another test, please request a refund for the unused one.</li>
              <li><strong>Switching Lab Brands?</strong> If you need to change from Quest to LabCorp (or vice-versa), contact support. Please allow up to 24 business hours for changes.</li>
              <li><strong>Appointments Highly Recommended:</strong> While walk-ins may be available, booking an appointment can save you time and ensure a smoother process.</li>
            </ul>
             <button style={{ marginTop: '1.25rem', fontSize: '0.875rem', fontWeight: 600, color: '#0ea5e9', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>Have More Questions? Visit Support</button>
          </div>
        </div>

        <div className="modal-footer">
            <div className="modal-footer-content">
                <span>US - All 50 States</span>
                <span style={{ height: '1rem', borderLeft: '1px solid #e5e7eb' }}></span>
                <span>9,000+ Locations</span>
                <span style={{ height: '1rem', borderLeft: '1px solid #e5e7eb' }}></span>
                <span>Appointments Recommended</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsModal;
