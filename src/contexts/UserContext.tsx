import React, { createContext, useState, useContext } from 'react';
import { UserDetails } from '../components/types/types';

interface UserContextType {
  reloadUserData: boolean;
  userDataLastReloadTime: string;
  userDetails: UserDetails | null;

  isAuthenticated: boolean;
  uid: string | null;
  userName: string | null;
  userHasPrivacySettings: boolean;

  setReloadUserData: (value: boolean) => void;
  setuserDataLastReloadTime: (value: string) => void;
  setUserDetails: (value: UserDetails | null) => void;

  setIsAuthenticated: (value: boolean) => void;
  setUid: (value: string | null) => void;
  setUserName: (value: string | null) => void;
  setUserHasPrivacySettings: (value: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reloadUserData, setReloadUserData] = useState<boolean>(false);
  const [userDataLastReloadTime, setuserDataLastReloadTime] = useState<string>("");
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userHasPrivacySettings, setUserHasPrivacySettings] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ 
      reloadUserData, setReloadUserData,
      userDataLastReloadTime, setuserDataLastReloadTime,
      userDetails, setUserDetails,

      isAuthenticated, setIsAuthenticated, 
      uid, setUid, 
      userName, setUserName,
      userHasPrivacySettings, setUserHasPrivacySettings
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};