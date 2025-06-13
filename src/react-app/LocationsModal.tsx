import React from 'react';

type LocationsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LocationsModal: React.FC<LocationsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-modal-overlay-show" onClick={onClose}>
      <div className="bg-primary-bg rounded-lg shadow-xl w-full max-w-4xl m-4 animate-modal-content-show custom-scrollbar overflow-y-auto max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-primary-bg/80 backdrop-blur-sm p-5 border-b border-border-color z-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-primary-text">Find a Testing Location & Key Info</h2>
            <button onClick={onClose} className="text-muted-text hover:text-primary-text text-3xl font-light leading-none">&times;</button>
          </div>
          <p className="text-secondary-text mt-1">Your barcode is flexible! Here's what you need to know about using it at Quest Diagnostics and LabCorp locations nationwide.</p>
        </div>
        
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Quest Tile */}
            <div className="bg-secondary-bg p-6 rounded-lg border border-border-color">
              <h3 className="text-xl font-bold text-primary-text mb-3">Quest Diagnostics</h3>
              <ul className="space-y-2 text-secondary-text">
                <li><strong className="font-semibold text-primary-text">Barcodes:</strong> Often feature a "Q" and/or numbers.</li>
                <li><strong className="font-semibold text-primary-text">Network:</strong> Includes their Patient Service Centers (PSCs) & authorized third-party collection sites.</li>
                <li><strong className="font-semibold text-primary-text">Payment:</strong> No payment is required at the collection site.</li>
              </ul>
              <button className="mt-4 w-full px-4 py-2 font-semibold text-white bg-brand-medium-blue rounded-lg hover:opacity-90 transition">Find Quest Diagnostics Locations</button>
            </div>

            {/* LabCorp Tile */}
            <div className="bg-secondary-bg p-6 rounded-lg border border-border-color">
              <h3 className="text-xl font-bold text-primary-text mb-3">LabCorp</h3>
              <ul className="space-y-2 text-secondary-text">
                <li><strong className="font-semibold text-primary-text">Barcodes:</strong> Typically all numeric.</li>
                <li><strong className="font-semibold text-primary-text">Network:</strong> Primarily operates its own corporately-owned Patient Service Centers (PSCs).</li>
                <li><strong className="font-semibold text-primary-text">Payment:</strong> No payment is required at the collection site.</li>
              </ul>
              <button className="mt-4 w-full px-4 py-2 font-semibold text-white bg-brand-medium-blue rounded-lg hover:opacity-90 transition">Find LabCorp Locations</button>
            </div>
          </div>

          <div className="bg-secondary-bg p-6 rounded-lg border border-border-color">
            <h3 className="text-xl font-bold text-primary-text mb-4">Important Reminders</h3>
            <ul className="space-y-3 text-secondary-text">
              <li><strong className="text-primary-text">No Payment at Site:</strong> Collection sites are compensated by our lab partners directly. You should NEVER be asked for payment at the facility.</li>
              <li><strong className="text-primary-text">Accidental Double Purchase?</strong> If a site issue forced you to purchase another test, please request a refund for the unused one.</li>
              <li><strong className="text-primary-text">Switching Lab Brands?</strong> If you need to change from Quest to LabCorp (or vice-versa), contact support. Please allow up to 24 business hours for changes.</li>
              <li><strong className="text-primary-text">Appointments Highly Recommended:</strong> While walk-ins may be available, booking an appointment can save you time and ensure a smoother process.</li>
            </ul>
             <button className="mt-5 text-sm font-semibold text-brand-medium-blue hover:underline">Have More Questions? Visit Support</button>
          </div>
        </div>

        <div className="sticky bottom-0 bg-primary-bg/80 backdrop-blur-sm p-4 border-t border-border-color mt-4">
            <div className="flex justify-center items-center space-x-6 text-secondary-text text-sm">
                <span>US - All 50 States</span>
                <span className="h-4 border-l border-border-color"></span>
                <span>9,000+ Locations</span>
                <span className="h-4 border-l border-border-color"></span>
                <span>Appointments Recommended</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsModal;
