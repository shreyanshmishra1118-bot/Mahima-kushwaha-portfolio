import React, { useState, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200); // Match animation duration
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex justify-center items-center p-4 modal-backdrop-animate-in`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className={`bg-zinc-900 rounded-lg shadow-xl w-full max-w-lg relative overflow-hidden ${isClosing ? 'modal-content-animate-out' : 'modal-content-animate-in'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-zinc-800">
          <h2 id="modal-title" className="text-xl font-bold text-slate-100">{title}</h2>
          <button onClick={handleClose} className="text-slate-400 hover:text-white transition-colors" data-interactive aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>
        <main className="p-6 max-h-[70vh] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Modal;