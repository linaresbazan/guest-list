import { createContext, useContext, useState } from "react";
// import GUESTS from "./data.js";

const GuestContext = createContext();

export function GuestProvider({ children }) {
  const [guestList, setGuestList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  const value = {
    guestList,
    setGuestList,
    selectedGuest,
    setSelectedGuest,
  };

  return <GuestContext.Provider value={value}>{children}</GuestContext.Provider>;
}

export function useGuest() {
  const context = useContext(GuestContext);
  if (!context) throw Error("useGuest must be used within a GuestProvider");
  return context;
}
