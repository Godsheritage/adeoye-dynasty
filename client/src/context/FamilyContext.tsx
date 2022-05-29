import { createContext, useState } from "react";
import { contextTypes, familyMemberTypes } from "../types";

const FamilyContext = createContext<contextTypes | null>(null);

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  // to find the age of a member
  const year: any = new Date().getFullYear();
  const age = (DOB: Date) => {
    return year - DOB.getFullYear();
  };

  const familyMembers: familyMemberTypes["member"][] = [
    {
      name: "Tunde Adeoye",
      DOB: new Date("26 May 1971"),
      image: require("../assets/images/family pictures/Tunde.jpg"),
      sex: "male",
      bio: "",
      age: age(new Date("26 May 1971")),
      isAlive: true,
      YearOfDeath: null,
    },
    {
      name: "Ruth Adeoye",
      DOB: new Date("21 September 1976"),
      image: require("../assets/images/family pictures/Ruth.jpg"),
      sex: "female",
      bio: "",
      age: age(new Date("21 September 1976")),
      isAlive: true,
      YearOfDeath: null,
    },
    {
      name: "Crownfit Adeoye",
      DOB: new Date("28 August 2002"),
      image: require("../assets/images/family pictures/Crownfit.jpg"),
      sex: "male",
      bio: "",
      age: age(new Date("28 August 2002")),
      isAlive: true,
      YearOfDeath: null,
    },
    {
      name: "Godsheritage Adeoye",
      DOB: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Godsheritage.JPG"),
      sex: "male",
      bio: "",
      age: age(new Date("30 march 2004")),
      isAlive: true,
      YearOfDeath: null,
    },
    {
      name: "Mojola Adeoye",
      DOB: new Date("16 November 2007"),
      image: require("../assets/images/family pictures/Mojola.JPG"),
      sex: "male",
      bio: "",
      age: age(new Date("16 November 2007")),
      isAlive: true,
      YearOfDeath: null,
    },
    {
      name: "Tunde Adeoye",
      DOB: new Date("26 May 1971"),
      image: require("../assets/images/family pictures/Tunde.jpg"),
      sex: "male",
      bio: "",
      age: age(new Date("26 May 1971")),
      isAlive: true,
      YearOfDeath: null,
    },
    {
      name: "Ruth Adeoye",
      DOB: new Date("21 September 1976"),
      image: require("../assets/images/family pictures/Ruth.jpg"),
      sex: "female",
      bio: "",
      age: age(new Date("21 September 1976")),
      isAlive: true,
      YearOfDeath: null,
    },
    {
      name: "Crownfit Adeoye",
      DOB: new Date("28 August 2002"),
      image: require("../assets/images/family pictures/Crownfit.jpg"),
      sex: "male",
      bio: "",
      age: age(new Date("28 August 2002")),
      isAlive: true,
      YearOfDeath: null,
    },
    {
      name: "Godsheritage Adeoye",
      DOB: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Godsheritage.JPG"),
      sex: "male",
      bio: "",
      age: age(new Date("30 march 2004")),
      isAlive: true,
      YearOfDeath: null,
    },
    {
      name: "Mojola Adeoye",
      DOB: new Date("16 November 2007"),
      image: require("../assets/images/family pictures/Mojola.JPG"),
      sex: "male",
      bio: "",
      age: age(new Date("16 November 2007")),
      isAlive: true,
      YearOfDeath: null,
    },
  ];

  return (
    <FamilyContext.Provider value={{ familyMembers }}>
      {children}
    </FamilyContext.Provider>
  );
};

export default FamilyContext;