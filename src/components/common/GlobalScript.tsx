import React, { useState, useEffect } from 'react';

import { useUser } from '../../contexts/UserContext';
import { useSystem } from '../../contexts/SystemContext';
import { UserDetails } from '../types/types';
import { getUserDetailsViaID } from '../../services/userService';

import LoadingScreen from './custom-elements/LoadingScreen';
import { IMAGES_TO_PRELOAD } from '../../constants/constants';

const GlobalScript: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appLoading, setAppLoading] = useState(false);
  const systemContext = useSystem();
  const userContext = useUser();

  ///////////////////////////////
  // Load on App Start
  ///////////////////////////////
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
        // Assets are fully loaded on this part
        systemContext.setAppLoaded(true);
        setAppLoading(false);
      });
    };

    if (systemContext.appLoaded || appLoading) return;
    setAppLoading(true);
    onAppStart();
  }, []);

  ///////////////////////////////
  // Load User Data
  // - This loads each time the user changes
  ///////////////////////////////
  useEffect(() => {
    userContext.setReloadUserData(true);
  }, [userContext.uid]);

  ///////////////////////////////
  // Refresh User
  // - This runs each time we want to fetch updated data from the user
  ///////////////////////////////
  useEffect(() => {
    if(!userContext.reloadUserData) return;

    refreshUser();
    userContext.setReloadUserData(false);
  }, [userContext.reloadUserData]);

  const refreshUser = async () => {
    const hasUser = await refreshUserDetails();
    if (!hasUser){
      console.error("Failed to refresh user");
      userContext.setUserDetails(null);
      userContext.setIsAuthenticated(false);
      userContext.setUid(null);
    }

    // Mark all datas that rely on user data as ready to be reloaded
    console.log('marking user data as reloaded');
    userContext.setuserDataLastReloadTime(new Date().toISOString());
  }

  const refreshUserDetails = async () => {
    if (!userContext.uid){
      console.error("User ID is null");
      return false;
    }

    // TO DO TODO: This part needs to be cleaned
    const userDetails: any = await getUserDetailsViaID(userContext.uid!),
      returnData = userDetails?.data;
    let newUserDetails: UserDetails | null = returnData ?? null;
    if (!newUserDetails){
      console.error("Failed to fetch user details");
      return false;
    }

    userContext.setUserDetails(newUserDetails);
    userContext.setIsAuthenticated(true);
    userContext.setUid(newUserDetails.id);
    return true;
  }

  const onAppStartLoading = async () => {
    
  }

  return (
    <>
      <LoadingScreen isShow={appLoading} />
      {children}
    </>
  );
};

export default GlobalScript;