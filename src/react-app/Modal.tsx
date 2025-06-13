import React from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-primary-bg rounded-lg shadow-xl p-6 w-full max-w-md m-4">
        <div className="flex justify-between items-center pb-3">
          <h2 className="text-xl font-bold text-primary-text">{title}</h2>
          <button onClick={onClose} className="text-primary-text text-2xl font-bold">&times;</button>
        </div>
        <div className="pt-4 border-t border-border-color">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
