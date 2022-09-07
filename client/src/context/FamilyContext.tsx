import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contextTypes, familyMemberTypes } from "../types";
import { createContext, useEffect, useState } from "react";
import { addMember } from "../Store/reducers/familyReducers";

const FamilyContext = createContext<contextTypes | null>(null);

const API_URL = "http://localhost:1234";

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  const [isDashboardMode, setIsDashboardMode] = useState<boolean>(false);

  const [isLoggedInMode, setIsLoggedInMode] = useState<boolean>(false);

  // FETCH FAMILY MEMBERS
  // const fetchFamily = async () => {
  //   const response = await axios.get(`${API_URL}api/family/members`);
  //   dispatch(addMember(response.data));
  //   console.log("API CALLED");
  // };

  // useEffect(() => {
  //   fetchFamily();
  // }, []);

  //FETCH FAMILY
  const fetchFamily = useCallback(async () => {
    let response;
    try {
      response = await axios.get(`${API_URL}/api/family/members`);
      dispatch(addMember(response.data));
    } catch (error) {
      console.log(`fetch family failed to run ${error}`);
    }

    console.log("API CALLED");
  }, [dispatch]);

  useEffect(() => {
    fetchFamily();
  }, [fetchFamily]);

  let familyMembers: familyMemberTypes["member"][] = useSelector(
    (state: any) => state.familyMembers
  );

  // SIGN USERS IN
  const signIn = async (username: string, password: string) => {
    const authObject = { username, password };
    try {
      const response = await axios.post(`${API_URL}/api/auth`, authObject);
      setIsLoggedInMode(true);
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
        isLoggedInMode,
        setIsDashboardMode,
        isDashboardMode,
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
