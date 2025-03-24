import React, { createContext, useState } from "react";
export const HeaderContext = createContext(null);

export const HeaderProvider = ({ children }) => {
  //managing global state for active component
  const [selected, setSelected] = useState("dashboard");

  return (
    <HeaderContext.Provider value={{ selected, setSelected }}>
      {children}
    </HeaderContext.Provider>
  );
};
