import axios from "axios";
import { useNavigate } from "react-router-dom";
import { contextTypes, familyMemberTypes } from "../types";
import { createContext, useEffect, useState, useMemo } from "react";
import FamilyMembersList from "../Family/components/FamilyMembersList";
import FamilyMember from "../Family/components/FamilyMember";

const FamilyContext = createContext<contextTypes | null>(null);
  
const API_URL = "http://localhost:1234";

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const navigate = useNavigate();

  const [familyMembers, setFamilyMembers] = useState<
    familyMemberTypes["member"][] | any
  >();

  const [singleFamilyMembers, setSingleFamilyMembers] = useState("");

  // fetch single family member
  // const fetchSingleFamilyMember =useCallback( async (name: string) => {
  //   const response = await axios.get(`${API_URL}/family/member/${name}`);
  //   setSingleFamilyMember(response.data);
  //   navigate(`/family/${name}`);
  // }, [])

  // fetch single family member
  const fetchSingleFamilyMember = async (name: string) => {
    setSingleFamilyMembers(name);
    // const response = await axios.get(`${API_URL}/family/member/${name}`);
    // setSingleFamilyMember(response.data);
    // navigate(`/family/${name}`);
  }

  const singleFamilyMember = () => {}
  // useMemo( () => familyMembers.find(
  //   (member: any) => member.name === singleFamilyMembers
  // ), [familyMembers, singleFamilyMembers])

  // to fetch family members
  const fetchFamily = async () => {
    const response = await axios.get(`${API_URL}/family/members`);
    setFamilyMembers(response.data);
    console.log("searched for fam");
  };

  
  // const fetchFamily = async () => {
  //   const response = await axios.get(`${API_URL}/family/members`);
  //   setFamilyMembers(response.data);
  //   console.log("searched for fam");
  // };

  useEffect(() => {
    fetchFamily();
  }, []);

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
    <FamilyContext.Provider
      value={{
        familyMembers,
        signIn,
        fetchFamily,
        fetchSingleFamilyMember,
        singleFamilyMember,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
