import { familyMemberTypes } from "../types";
import { familyModel } from "./family.mongo";

// to find the age of a member
const year: any = new Date().getFullYear();

const age = (DOB: Date) => {
  return year - DOB.getFullYear();
};

const familyMembers: familyMemberTypes["member"][] = [
  {
    name: "Tunde Adeoye",
    DOB: new Date("26 May 1971"),
    image:
      "https://drive.google.com/file/d/1PrP6zle2Cayr4D0v5drtROnmwtkALWnJ/view?usp=sharing",
    sex: "male",
    bio: "",
    age: age(new Date("26 May 1971")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Ruth Adeoye",
    DOB: new Date("21 September 1976"),
    image:
      "https://drive.google.com/file/d/1hIItCJAsBxXJaDUv7qcRFO7tk22bWzmY/view?usp=sharing",
    sex: "female",
    bio: "",
    age: age(new Date("21 September 1976")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Crownfit Adeoye",
    DOB: new Date("28 August 2002"),
    image:
      "https://drive.google.com/file/d/1rjrdHIs2ZijDes5GCSPjc-WRGu8GubDv/view?usp=sharing",
    sex: "male",
    bio: "",
    age: age(new Date("28 August 2002")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Godsheritage Adeoye",
    DOB: new Date("30 march 2004"),
    image:
      "https://drive.google.com/file/d/1Wzu7DKuusAxESZO1gQgW4aR8d1fbt-M4/view?usp=sharing",
    sex: "male",
    bio: "",
    age: age(new Date("30 march 2004")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Mojola Adeoye",
    DOB: new Date("16 November 2007"),
    image:
      "https://drive.google.com/file/d/1yXSeftvxK3mSI6ys9Hsetg-Skh6xWiWt/view?usp=sharing",
    sex: "male",
    bio: "",
    age: age(new Date("16 November 2007")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Tunde Adeoye",
    DOB: new Date("26 May 1971"),
    image:
      "https://drive.google.com/file/d/1PrP6zle2Cayr4D0v5drtROnmwtkALWnJ/view?usp=sharing",
    sex: "male",
    bio: "",
    age: age(new Date("26 May 1971")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Ruth Adeoye",
    DOB: new Date("21 September 1976"),
    image:
      "https://drive.google.com/file/d/1hIItCJAsBxXJaDUv7qcRFO7tk22bWzmY/view?usp=sharing",
    sex: "female",
    bio: "",
    age: age(new Date("21 September 1976")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Crownfit Adeoye",
    DOB: new Date("28 August 2002"),
    image:
      "https://drive.google.com/file/d/1rjrdHIs2ZijDes5GCSPjc-WRGu8GubDv/view?usp=sharing",
    sex: "male",
    bio: "",
    age: age(new Date("28 August 2002")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Godsheritage Adeoye",
    DOB: new Date("30 march 2004"),
    image:
      "https://drive.google.com/file/d/1Wzu7DKuusAxESZO1gQgW4aR8d1fbt-M4/view?usp=sharing",
    sex: "male",
    bio: "",
    age: age(new Date("30 march 2004")),
    isAlive: true,
    YearOfDeath: null,
  },
  {
    name: "Mojola Adeoye",
    DOB: new Date("16 November 2007"),
    image:
      "https://drive.google.com/file/d/1yXSeftvxK3mSI6ys9Hsetg-Skh6xWiWt/view?usp=sharing",
    sex: "male",
    bio: "",
    age: age(new Date("16 November 2007")),
    isAlive: true,
    YearOfDeath: null,
  },
];

const addFamilyMembers = async () => {
  await familyModel.updateOne(familyMembers, familyMembers, { upsert: true });
};

// addFamilyMembers();

export const fetchFamilyMembers = async () => {
  return await familyModel.find({}, {});
};


export default familyMembers;
