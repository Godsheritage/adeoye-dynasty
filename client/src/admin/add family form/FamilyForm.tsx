import React from "react";
import Input from "../../shared/Form Elements/input/Input";
import Button from "../../shared/Form Elements/buttons/Buttons";

const FamilyForm = () => {
  return (
    <div>
      <form className="container d-flex justify-content-evenly flex-column ">
        <div className=" d-flex flex-row justify-content-between">
          <Input
            placeholder="first name"
            className="form-control w-200"
            element="input"
            type="text"
            errorText=""
          />
          <Input
            placeholder="last name"
            className="form-control"
            element="input"
            type="text"
            errorText=""
          />
        </div>
        <Input
          placeholder="Date of Birth"
          className="form-control"
          element="input"
          type="date"
          errorText=""
        />
        <Input
          placeholder="Date of Birth"
          className="form-control"
          element="input"
          type="image"
          errorText=""
        />
        <Input
          placeholder="BIO"
          className="form-control"
          element="text area"
          type="text"
          errorText=""
        />
        <Button className="align-self-center" element="button">Add Member</Button>
      </form>
    </div>
  );
};

export default FamilyForm;
