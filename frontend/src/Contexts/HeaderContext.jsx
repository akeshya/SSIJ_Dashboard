import React, { createContext, useState } from "react";
export const HeaderContext = createContext(null);

export const HeaderProvider = ({ children }) => {
  //managing global state for active component
  const [selected, setSelected] = useState("dashboard");
  const [selectedStatus, setSelectedStatus] = useState("Dashboard");
  const [selectedSearch, setSelectedSearch] = useState("Dashboard");
  // Function to update the selected component
  return (
    <HeaderContext.Provider
      value={{
        selected,
        setSelected,
        selectedStatus,
        setSelectedStatus,
        selectedSearch,
        setSelectedSearch,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
