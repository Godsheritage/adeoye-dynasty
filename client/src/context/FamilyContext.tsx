import { createContext, useState } from "react";
import { contextTypes, familyMemberTypes } from "../types";

const FamilyContext = createContext<contextTypes | null>(null);

export const FamilyContextProvider: React.FC<any> = ({ children }) => {
  const year: any = new Date().getFullYear();
  const age = (DOB: Date) => {
    return year - DOB.getFullYear();
  };

  const familyMembers: familyMemberTypes["member"][] = [
    {
      name: "Tunde Adeoye",
      DOB: new Date("2004 march 30"),
      image: require("../assets/images/family pictures/Tunde.jpg"),
      sex: "male",
      bio: "",
      age: age(new Date("2004 march 30")),
      isAlive: true,
      yearOfBirth: 2004,
      YearOfDeath: null,
    },
    {
      name: "Ruth Adeoye",
      DOB: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Ruth.jpg"),
      sex: "female",
      bio: "",

      age: 5,
      isAlive: true,
      yearOfBirth: 2004,
      YearOfDeath: null,
    },
    {
      name: "Crownfit Adeoye",
      DOB: new Date("28 August 2002"),
      image: require("../assets/images/family pictures/Crownfit.jpg"),
      sex: "male",
      bio: "",
      age: 5,
      isAlive: true,
      yearOfBirth: 2002,
      YearOfDeath: null,
    },
    {
      name: "Godsheritage Adeoye",
      DOB: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Godsheritage.JPG"),
      sex: "male",
      bio: "",
      age: 5,
      isAlive: true,
      yearOfBirth: 2004,
      YearOfDeath: null,
    },
    {
      name: "Mojola Adeoye",
      DOB: new Date("28 August 2002"),
      image: require("../assets/images/family pictures/Mojola.JPG"),
      sex: "male",
      bio: "",
      age: 5,
      isAlive: true,
      yearOfBirth: 2002,
      YearOfDeath: null,
    },
    {
      name: "Tunde Adeoye",
      DOB: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Tunde.jpg"),
      sex: "male",
      bio: "",
      age: 5,
      isAlive: true,
      yearOfBirth: 2004,
      YearOfDeath: null,
    },
    {
      name: "Ruth Adeoye",
      DOB: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Ruth.jpg"),
      sex: "female",
      bio: "",
      age: 5,
      isAlive: true,
      yearOfBirth: 2004,
      YearOfDeath: null,
    },
    {
      name: "Crownfit Adeoye",
      DOB: new Date("28 August 2002"),
      image: require("../assets/images/family pictures/Crownfit.jpg"),
      sex: "male",
      bio: "",
      age: 5,
      isAlive: true,
      yearOfBirth: 2002,
      YearOfDeath: null,
    },
    {
      name: "Godsheritage Adeoye",
      DOB: new Date("30 march 2004"),
      image: require("../assets/images/family pictures/Godsheritage.JPG"),
      sex: "male",
      bio: "",
      age: 5,
      isAlive: true,
      yearOfBirth: 2004,
      YearOfDeath: null,
    },
    {
      name: "Mojola Adeoye",
      DOB: new Date("28 August 2002"),
      image: require("../assets/images/family pictures/Mojola.JPG"),
      sex: "male",
      bio: "",
      age: 5,
      isAlive: true,
      yearOfBirth: 2002,
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
