import React, { useEffect } from 'react';

import { useSystem } from '../../contexts/SystemContext';

const GlobalScript: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemContext = useSystem();

  useEffect(() => {
    // On app start codes
    const onAppStart = async () => {
      // Call await functions here
      systemContext.setAppLoaded(true);
    };
    onAppStart();
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default GlobalScript;