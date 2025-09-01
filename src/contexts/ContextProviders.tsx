import React from 'react';
import { SystemProvider } from './SystemContext';
import { UserProvider } from './UserContext';
import { ModalProvider } from './ModalContext';

interface ContextProvidersProps {
  children: React.ReactNode;
}

const ContextProviders: React.FC<ContextProvidersProps> = ({ children }) => {
  return (
    <SystemProvider>
      <UserProvider>
        <ModalProvider>
          {children}
        </ModalProvider>
      </UserProvider>
    </SystemProvider>
  );
};

export default ContextProviders;