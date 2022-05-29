import { createContext, useState } from "react";
import { contextTypes, familyMemberTypes } from "../types";
import axios from "axios";

const FamilyContext = createContext<contextTypes | null>(null);

export const FamilyContextProvider: React.FC<any> = ({ children }) => {

  
  return (
    <FamilyContext.Provider value={{ familyMembers }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
