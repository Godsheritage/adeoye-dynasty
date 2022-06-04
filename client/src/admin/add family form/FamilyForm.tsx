import React from "react";
import Input from "../../shared/Form Elements/input/Input";

const FamilyForm = () => {
  return (
    <form>
      <Input
        placeholder="name"
        className=""
        element="input"
        type="text"
        errorText=""
      />
    </form>
  );
};

export default FamilyForm;
