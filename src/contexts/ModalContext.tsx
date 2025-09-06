import React, { createContext, useState, useContext } from 'react';

interface ModalContextType {
  isTermsAndPrivacyPopupOpen: boolean;
  isLoginModalOpen: boolean;
  isCashInModalOpen: boolean;

  setIsTermsAndPrivacyPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setisLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCashInModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTermsAndPrivacyPopupOpen, setIsTermsAndPrivacyPopupOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setisLoginModalOpen] = useState<boolean>(false);
  const [isCashInModalOpen, setIsCashInModalOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ 
      isTermsAndPrivacyPopupOpen, setIsTermsAndPrivacyPopupOpen,
      isLoginModalOpen, setisLoginModalOpen,
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