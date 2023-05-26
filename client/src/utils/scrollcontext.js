import { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const ref = useRef(null)

  return (
    <ScrollContext.Provider
    value={{
      ref
    }}
    >
      {children}
    </ScrollContext.Provider>
  )
 }