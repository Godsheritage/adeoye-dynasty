import { familyMemberTypes } from "../../types";
import { familyModel } from "./family.mongo";

//FIND AGE OF EACH MEMBER
const currentAge = (DOB: Date) => {
  const currentYear: number = new Date().getFullYear();
  return currentYear - DOB.getFullYear();
};

const familyMembers: familyMemberTypes["member"][] = [
  {
    name: "Tunde Adeoye",
    DOB: new Date("26 May 1971"),
    image: "Tunde.jpg",
    sex: "male",
    bio: "just there",
    age: currentAge(new Date("26 May 1971")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Ruth Adeoye",
    DOB: new Date("21 September 1976"),
    image: "Ruth.jpg",
    sex: "female",
    bio: "just there",
    age: currentAge(new Date("21 September 1976")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Crownfit Adeoye",
    DOB: new Date("28 August 2002"),
    image: "Crownfit.jpg",
    sex: "male",
    bio: "just there",
    age: currentAge(new Date("28 August 2002")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Godsheritage Adeoye",
    DOB: new Date("30 march 2004"),
    image: "Godsheritage.JPG",
    sex: "male",
    bio: "just there",
    age: currentAge(new Date("30 march 2004")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Mojola Adeoye",
    DOB: new Date("16 November 2007"),
    image: "Mojola.JPG",
    sex: "male",
    bio: "just there",
    age: currentAge(new Date("16 November 2007")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Tunde Adeoye",
    DOB: new Date("26 May 1971"),
    image: "Tunde.jpg",
    sex: "male",
    bio: "just there",
    age: currentAge(new Date("26 May 1971")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Ruth Adeoye",
    DOB: new Date("21 September 1976"),
    image: "Ruth.jpg",
    sex: "female",
    bio: "just there",
    age: currentAge(new Date("21 September 1976")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Crownfit Adeoye",
    DOB: new Date("28 August 2002"),
    image: "Crownfit.jpg",
    sex: "male",
    bio: "just there",
    age: currentAge(new Date("28 August 2002")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Godsheritage Adeoye",
    DOB: new Date("30 march 2004"),
    image: "Godsheritage.JPG",
    sex: "male",
    bio: "just there",
    age: currentAge(new Date("30 march 2004")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Mojola Adeoye",
    DOB: new Date("16 November 2007"),
    image: "Mojola.JPG",
    sex: "male",
    bio: "just there",
    age: currentAge(new Date("16 November 2007")),
    isAlive: true,
    YearOfDeath: null,
  },
];

//ADD A FAMILY MEMBER TO THE DATABASE
export const addFamilyMembers = async (member: familyMemberTypes["member"]) => {
  const newMember = {
    name: member.name,
    DOB: member.DOB,
    image: member.image,
    sex: member.sex,
    bio: member.bio,
    age: member.age,
    isAlive: member.DOB,
    YearOfDeath: member.DOB,
  };
  await familyModel.create(newMember);
};

// FETCH AND SORT ALL THE FAMILY MEMBERS FROM THE DATABASE
export const fetchFamilyMembers = async () => {
  return await familyModel.find({}, { __v: 0 }).sort({ age: -1 });
};

// FETCH FAMILY MEMBER BY NAME FROM THE DATABASE
export const fetchSingleFamilyMember = async (name: string) => {
  const member = await familyModel.findOne({ name }, { __v: 0 });
  if (!member) {
    return { message: "member not found", status: 404 };
  }
  return { message: "member found", status: 200, member };
};
