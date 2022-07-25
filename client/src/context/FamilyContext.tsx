import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { contextTypes, familyMemberTypes } from "../types";
import {
  createContext,
  useEffect,
  useCallback,
  useState,
  useMemo,
} from "react";
import { addMember, selectedMember } from "../Store/reducers/familyReducers";

const FamilyContext = createContext<contextTypes | null>(null);

const API_URL = "http://localhost:1234";





export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const dispatch = useDispatch();
  const [isDashboard, setIsDashboard] = useState<boolean>(false)

  const [isLoggedInMode, setIsLoggedInMode] = useState<boolean>(false);

  // const [singleFamilyMember, setSingleFamilyMembers] = useState("");

  // to fetch family members
  const fetchFamily = async () => {
    const response = await axios.get(`${API_URL}/family/members`);
    dispatch(addMember(response.data));
    console.log("API CALLED");
  };

  useEffect(() => {
    fetchFamily();
  }, []);
  // const fetchFamily = useCallback(async () => {
  //   const response = await axios.get(`${API_URL}/family/members`);
  //   dispatch(addMember(response.data));
  //   console.log("API CALLED");
  // }, [dispatch]);

  // useEffect(() => {
  //   fetchFamily();
  // }, [fetchFamily]);
// console.log(getstat)

  let familyMembers: familyMemberTypes["member"][] = useSelector(
    (state: any) => state.familyMembers
  );

  // sign users in
  const signIn = async (username: string, password: string) => {
    const authObject = { username, password };
    try {
      const response = await axios.post(`${API_URL}/auth`, authObject);
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
        setIsDashboard, 
        isDashboard
      }}
    >
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;
