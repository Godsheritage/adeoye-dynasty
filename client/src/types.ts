export interface familyMemberTypes {
  member: {
    name: string;
    DOB: Date;
    image: string;
    age:number,
    sex: string;
    bio: string;
    isAlive: true;
    yearOfBirth: number;
    YearOfDeath: number | null;
  };
}

export interface inputTypes {
  className: string;
  placeHolder: string;
}

export interface MAIN_DETAILS_TYPE {
  heading: string;
  subHeading: string;
}

export interface contextTypes {
  familyMembers: familyMemberTypes["member"][]
  
}
