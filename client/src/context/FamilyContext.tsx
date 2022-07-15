import axios from "axios";
import { useNavigate } from "react-router-dom";
import { contextTypes, familyMemberTypes } from "../types";
import { createContext, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../Store/reducers/familyReducers";

const FamilyContext = createContext<contextTypes | null>(null);

const API_URL = "http://localhost:1234";

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // to fetch family members

  const fetchFamily = useCallback(async () => {
    const response = await axios.get(`${API_URL}/family/members`);
    dispatch(addMember(response.data));
  }, [dispatch]);

  useEffect(() => {
    fetchFamily();
  }, [fetchFamily]);

  const familyMembers: familyMemberTypes["member"][] = useSelector(
    (state: familyMemberTypes["member"][]) => state
  );

  const fetchSingleFamilyMember = (name: string) => {
    return familyMembers.find((member) => name === member.name);
  };

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
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
