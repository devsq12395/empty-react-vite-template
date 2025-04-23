import React from 'react';
import { SystemProvider } from './SystemContext';

interface ContextProvidersProps {
  children: React.ReactNode;
}

const ContextProviders: React.FC<ContextProvidersProps> = ({ children }) => {
  return (
    <SystemProvider>
      {children}
    </SystemProvider>
  );
};

export default ContextProviders;