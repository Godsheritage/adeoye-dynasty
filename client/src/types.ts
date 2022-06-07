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
  errorText: string;
  style?: any;
  value?: string;
  name?: string;
  validators: any;
  id: string;
  onInput?: any;
}

export interface ButtonTypes {
  className?: string;
  element: string;
  text?: string;
  to?: string;
  onClick?: any;
  children?: any;
  disabled?: boolean;
}

export interface MAIN_DETAILS_TYPE {
  heading: string;
  subHeading: string;
}

export interface contextTypes {
  familyMembers: familyMemberTypes["member"][];
}

export interface inputReducerState {
  isTouched:boolean
  value: string;
  isValid: boolean;
}

export interface initialReducerState {
  inputs: {
    email: {
      value: string;
      isValid: boolean;
    };
    password: {
      value: string;
      isValid: boolean;
    };
  };
  isValid: boolean;
}

export interface actionTypes {
  type: string;
  val: string;
  validators: any;
}

export interface formActionTypes {
  type: string;
  inputId: string;
  isValid: boolean;
  value: string;
}

export interface reducerType {
  validationReducer: (
    state: inputReducerState,
    action: actionTypes
  ) => inputReducerState;
  FormReducer: (
    state: initialReducerState,
    action: formActionTypes
  ) => initialReducerState;
}

export interface inputHandlerType {
  inputHandler:(id: string, value: string, isValid: boolean) => void


}