import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { contextTypes, familyMemberTypes } from "../types";

const FamilyContext = createContext<contextTypes | null>(null);

const API_URL = "http://localhost:1234";

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState<
    familyMemberTypes["member"][] | any
  >();

  const fetchFamily = async () => {
    const response = await axios.get(`${API_URL}/family/members`);
    setFamilyMembers(response.data);
  };

  const signIn = async () => {
    const response = await axios.get(`${API_URL}/auth`);
    return response.data
  };

  useEffect(() => {
    fetchFamily();
  }, []);

  return (
    <FamilyContext.Provider value={{ familyMembers, signIn }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
