"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSingleFamilyMembers = exports.fetchFamilyMembers = void 0;
const family_mongo_1 = require("./family.mongo");
// to find the age of a member
const year = new Date().getFullYear();
const age = (DOB) => {
    return year - DOB.getFullYear();
};
const familyMembers = [
    {
        name: "Tunde Adeoye",
        DOB: new Date("26 May 1971"),
        image: "Tunde.jpg",
        sex: "male",
        bio: "just there",
        age: age(new Date("26 May 1971")),
        isAlive: true,
        YearOfDeath: null,
    },
    {
        name: "Ruth Adeoye",
        DOB: new Date("21 September 1976"),
        image: "Ruth.jpg",
        sex: "female",
        bio: "just there",
        age: age(new Date("21 September 1976")),
        isAlive: true,
        YearOfDeath: null,
    },
    {
        name: "Crownfit Adeoye",
        DOB: new Date("28 August 2002"),
        image: "Crownfit.jpg",
        sex: "male",
        bio: "just there",
        age: age(new Date("28 August 2002")),
        isAlive: true,
        YearOfDeath: null,
    },
    {
        name: "Godsheritage Adeoye",
        DOB: new Date("30 march 2004"),
        image: "Godsheritage.JPG",
        sex: "male",
        bio: "just there",
        age: age(new Date("30 march 2004")),
        isAlive: true,
        YearOfDeath: null,
    },
    {
        name: "Mojola Adeoye",
        DOB: new Date("16 November 2007"),
        image: "Mojola.JPG",
        sex: "male",
        bio: "just there",
        age: age(new Date("16 November 2007")),
        isAlive: true,
        YearOfDeath: null,
    },
    {
        name: "Tunde Adeoye",
        DOB: new Date("26 May 1971"),
        image: "Tunde.jpg",
        sex: "male",
        bio: "just there",
        age: age(new Date("26 May 1971")),
        isAlive: true,
        YearOfDeath: null,
    },
    {
        name: "Ruth Adeoye",
        DOB: new Date("21 September 1976"),
        image: "Ruth.jpg",
        sex: "female",
        bio: "just there",
        age: age(new Date("21 September 1976")),
        isAlive: true,
        YearOfDeath: null,
    },
    {
        name: "Crownfit Adeoye",
        DOB: new Date("28 August 2002"),
        image: "Crownfit.jpg",
        sex: "male",
        bio: "just there",
        age: age(new Date("28 August 2002")),
        isAlive: true,
        YearOfDeath: null,
    },
    {
        name: "Godsheritage Adeoye",
        DOB: new Date("30 march 2004"),
        image: "Godsheritage.JPG",
        sex: "male",
        bio: "just there",
        age: age(new Date("30 march 2004")),
        isAlive: true,
        YearOfDeath: null,
    },
    {
        name: "Mojola Adeoye",
        DOB: new Date("16 November 2007"),
        image: "Mojola.JPG",
        sex: "male",
        bio: "just there",
        age: age(new Date("16 November 2007")),
        isAlive: true,
        YearOfDeath: null,
    },
];
const addFamilyMembers = async () => {
    await family_mongo_1.familyModel.create(familyMembers);
};
// addFamilyMembers();
// to find all family members
const fetchFamilyMembers = async () => {
    return await family_mongo_1.familyModel.find({}, { __v: 0 }).sort({ "age": -1 });
};
exports.fetchFamilyMembers = fetchFamilyMembers;
// to find an individual family meber
const fetchSingleFamilyMembers = async () => {
    return await family_mongo_1.familyModel.find({}, { __v: 0 }).sort({ "age": -1 });
};
exports.fetchSingleFamilyMembers = fetchSingleFamilyMembers;
exports.default = familyMembers;
