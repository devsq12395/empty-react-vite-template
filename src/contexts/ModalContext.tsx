import React, { createContext, useState, useContext } from 'react';

interface ModalContextType {
  isTermsAndPrivacyPopupOpen: boolean;
  isLoginPopupOpen: boolean;
  isCashInModalOpen: boolean;

  setIsTermsAndPrivacyPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoginPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCashInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTermsAndPrivacyPopupOpen, setIsTermsAndPrivacyPopupOpen] = useState<boolean>(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState<boolean>(false);
  const [isCashInModalOpen, setIsCashInModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ 
      isTermsAndPrivacyPopupOpen, setIsTermsAndPrivacyPopupOpen,
      isLoginPopupOpen, setIsLoginPopupOpen,
      isCashInModalOpen, setIsCashInModalOpen
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};