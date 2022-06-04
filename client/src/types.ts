export interface familyMemberTypes {
  member: {
    name: string;
    DOB: Date;
    image: string;
    age: number;
    sex: string;
    bio: string;
    isAlive: true;
    YearOfDeath: number | null;
  };
}

export interface inputTypes {
  className: string;
  placeholder: string;
  element: string;
  type: string;
  errorText:string;
  style?:any
}

export interface ButtonTypes {
  className?: string;
  element: string;
  text?: string;
  to?: string;
  onClick?: any;
  children?: any;
  disabled?:boolean
}

export interface MAIN_DETAILS_TYPE {
  heading: string;
  subHeading: string;
}

export interface contextTypes {
  familyMembers: familyMemberTypes["member"][];
}
