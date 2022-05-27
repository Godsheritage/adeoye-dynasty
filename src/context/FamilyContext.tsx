import { createContext, useState } from "react";
import { contextTypes, familyMemberTypes } from "../types";

const FamilyContext = createContext<contextTypes | null>(null);

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const familyMembers: familyMemberTypes["member"][] = [
    {
      name: "Tunde Adeoye",
      Age: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Tunde.jpg"),
      sex: "male",
      bio: "",
      isAlive: true,
      yearOfBirth: 2004,
      YearOfDeath: null,
    },
    {
      name: "Ruth Adeoye",
      Age: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Ruth.jpg"),
      sex: "female",
      bio: "",
      isAlive: true,
      yearOfBirth: 2004,
      YearOfDeath: null,
    },
    {
      name: "Crownfit Adeoye",
      Age: new Date("28 August 2002"),
      image: require("../assets/images/family pictures/Crownfit.jpg"),
      sex: "male",
      bio: "",
      isAlive: true,
      yearOfBirth: 2002,
      YearOfDeath: null,
    },
    {
      name: "Godsheritage Adeoye",
      Age: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Godsheritage.JPG"),
      sex: "male",
      bio: "",
      isAlive: true,
      yearOfBirth: 2004,
      YearOfDeath: null,
    },
    {
      name: "Mojola Adeoye",
      Age: new Date("28 August 2002"),
      image: require("../assets/images/family pictures/Mojola.JPG"),
      sex: "male",
      bio: "",
      isAlive: true,
      yearOfBirth: 2002,
      YearOfDeath: null,
    },
  ];

  return <FamilyContext.Provider value={{familyMembers}}>{children}</FamilyContext.Provider>;
};

export default FamilyContext;
