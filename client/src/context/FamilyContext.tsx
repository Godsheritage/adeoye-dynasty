import axios from "axios";
import { createContext, useState } from "react";
import { contextTypes, familyMemberTypes } from "../types";

const FamilyContext = createContext<contextTypes | null>(null);

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState<
    familyMemberTypes["member"][] | any
  >();

  const fetchFamily = async () => {
    const response = await axios.get("http:localhost:5000/family/members");
    setFamilyMembers(response.data);
  };

  return (
    <FamilyContext.Provider value={{ familyMembers }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
