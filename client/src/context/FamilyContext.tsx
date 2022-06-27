import axios from "axios";
import { createContext, useEffect, useState, useCallback } from "react";
import { contextTypes, familyMemberTypes } from "../types";

const FamilyContext = createContext<contextTypes | null>(null);

const API_URL = "http://localhost:1234";

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState<
    familyMemberTypes["member"][] | any
  >();

  // to fetch family members
  const fetchFamily = useCallback(async () => {
    const response = await axios.get(`${API_URL}/family/members`);
    // const familyMemberSort = response.data
    // familyMemberSort.
    setFamilyMembers(response.data);
    console.log("searched for fam");
  }, []);
  
  useEffect(() => {
    fetchFamily();
  }, [ fetchFamily]);

  // sign users in
  const signIn = async (username: string, password: string) => {
    const authObject = { username, password };
    try {
      const response = await axios.post(`${API_URL}/auth`, authObject);
      return response.data;
    } catch (err: any) {
      return { message: "invalid credentials", err };
    }
  };

  return (
    <FamilyContext.Provider value={{ familyMembers, signIn, fetchFamily }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
