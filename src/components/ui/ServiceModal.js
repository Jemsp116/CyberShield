"use client"

import { useEffect, useRef } from 'react';
import Link from 'next/link';

const ServiceModal = ({ isOpen, onClose, title, content }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity">
      <div 
        ref={modalRef}
        className="relative w-[95%] max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 rounded-lg shadow-2xl border border-gray-800 glow-border mx-2"
      >
        <div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-gray-900 border-b border-gray-800">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div className="p-4 sm:p-6">
          {content}
        </div>
        
        <div className="sticky bottom-0 z-10 flex flex-col sm:flex-row justify-end p-6 bg-gray-900 border-t border-gray-800">
          <Link href="/contact" className="btn-primary w-full sm:w-auto mb-3 sm:mb-0 sm:mr-4 text-center">
            Request a Consultation
          </Link>
          <button 
            onClick={onClose}
            className="btn-secondary w-full sm:w-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;