import React, { useState, createContext, useMemo } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [secret, setSecret] = useState('');
  const [loading, setLoading] = useState(false);

  const value = useMemo(
    () => ({
      username,
      setUsername,
      secret,
      setSecret,
      loading,
      setLoading,
    }),
    [username, secret, loading, setLoading, setUsername, setSecret]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAppContext = () => {
  const context = React.useContext(Context);

  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};
