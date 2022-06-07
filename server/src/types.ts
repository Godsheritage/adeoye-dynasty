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

export interface userTypes {
  username: string;
  password: string;
}
export interface findUserTypes {
  findUser: (username: string, password: string) => void;
}
