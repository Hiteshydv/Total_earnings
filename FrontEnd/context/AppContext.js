// src/context/AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [callbackData, setCallbackData] = useState(null);

  return (
    <AppContext.Provider value={{ callbackData, setCallbackData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
