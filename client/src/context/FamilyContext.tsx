import axios from "axios";
import { useNavigate } from "react-router-dom";
import { contextTypes, familyMemberTypes } from "../types";
import { createContext, useEffect, useState, useCallback } from "react";

const FamilyContext = createContext<contextTypes | null>(null);

const API_URL = "http://localhost:1234";

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const navigate = useNavigate();

  const [familyMembers, setFamilyMembers] = useState<
    familyMemberTypes["member"][] | any
  >();

  const [familyMember, setFamilyMember] = useState("");

  // fetch single family member
  const fetchSingleFamilyMember = async (member:any) => {
    const response = await axios.get(`${API_URL}/family/member${member.name}`);
    setFamilyMember(response.data);
    navigate(`/family/${member.name}`);
  };


  // to fetch family members
  const fetchFamily = useCallback(async () => {
    const response = await axios.get(`${API_URL}/family/members`);
    setFamilyMembers(response.data);
    console.log("searched for fam");
  }, []);

  useEffect(() => {
    fetchFamily();
  }, [fetchFamily]);

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
    <FamilyContext.Provider value={{ familyMembers, signIn, fetchFamily, fetchSingleFamilyMember, familyMember }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
