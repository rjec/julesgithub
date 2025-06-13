
import React from 'react';
import Modal from './Modal'; // Reusing the generic modal structure

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  aiPrompt: string;
  humanPrompt: string;
  phoneNumber: string;
  ChatIcon: React.ReactNode;
  PhoneIcon: React.ReactNode; // Will be used for texting icon (ChatBubbleIcon)
}

const HelpModal: React.FC<HelpModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  aiPrompt, 
  humanPrompt, 
  phoneNumber,
  ChatIcon,
  PhoneIcon // This will receive ChatBubbleIcon for the texting option
}) => {
  if (!isOpen) return null;

  return (
    <Modal title={title} onClose={onClose}>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-indigo-300 mb-2 flex items-center">
            {ChatIcon} AI Chatbot
          </h3>
          <p className="text-gray-300 mb-3">{aiPrompt}</p>
          <a
            href="https://www.LabTestingSolutions.Help"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors w-full text-center"
            aria-label="Go to AI Help Portal"
          >
            Go to AI Help Portal
          </a>
        </div>
        
        <hr className="border-gray-600"/>

        <div>
          <h3 className="text-lg font-semibold text-indigo-300 mb-2 flex items-center">
            {PhoneIcon} Human Contact (via Text)
          </h3>
          <p className="text-gray-300 mb-1">{humanPrompt}</p>
          <a 
            href={`sms:${phoneNumber}`} 
            className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors block text-center py-2"
            aria-label={`Text us at ${phoneNumber}`}
          >
            {phoneNumber}
          </a>
          <p className="text-xs text-gray-500 text-center mt-1">
            (Standard text message &amp; call rates may apply)
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default HelpModal;
