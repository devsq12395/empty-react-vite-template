import React, { useEffect, useState } from 'react';

import { useSystem } from '../../contexts/SystemContext';
import { IMAGES_TO_PRELOAD } from '../../constants/constants';
import LoadingScreen from './custom-elements/LoadingScreen';

const GlobalScript: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appLoading, setAppLoading] = useState(false);
  const systemContext = useSystem();

  useEffect(() => {
    // On app start codes
    const onAppStart = async () => {
      await onAppStartLoading();

      // Preload all images in IMAGES_TO_PRELOAD
      Promise.all(
        IMAGES_TO_PRELOAD.map((src) => {
          return new Promise((resolve) => {
            const img = new window.Image();
            img.onload = img.onerror = () => resolve(true);
            img.src = src;
          });
        })
      ).then(() => {
        // App is fully loaded on this part
        systemContext.setAppLoaded(true);
        setAppLoading(false);
      });
    };

    if (systemContext.appLoaded || appLoading) return;
    setAppLoading(true);
    onAppStart();
  }, []);

  const onAppStartLoading = async () => {
    // Add your codes here
  }

  return (
    <>
      <LoadingScreen isShow={appLoading} />
      {children}
    </>
  );
};

export default GlobalScript;