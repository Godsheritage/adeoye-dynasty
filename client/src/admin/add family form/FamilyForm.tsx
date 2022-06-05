import React from "react";
import Input from "../../shared/Form Elements/input/Input";
import Button from "../../shared/Form Elements/buttons/Buttons";

const FamilyForm = () => {
  return (
    <div className="mt-5">
      <form className="container d-flex justify-content-evenly flex-column  ">
        <div className=" d-flex flex-row justify-content-between py-3">
          <Input
            placeholder="first name"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText=""
          />
          <Input
            placeholder="last name"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText=""
          />
        </div>
        <div className=" d-flex flex-row justify-content-between py-3">
          <Input
            placeholder="Father's name"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText=""
          />
          <Input
            placeholder="Mother's name"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText=""
          />
        </div>
        <div className=" d-flex flex-row justify-content-between py-3">
          <Input
            placeholder="proffession"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText=""
          />
          <div>
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
              type="radio"
              errorText=""
            />
            <Input
              placeholder="Date of Birth"
              className="form-control"
              element="input"
              type="radio"
              errorText=""
            />
          </div>
        </div>
        <Input
          placeholder="BIO"
          className="form-control my-3"
          element="text area"
          type="text"
          errorText=""
        />
        <Button
          className="align-self-center btn btn-primary my-3"
          element="button"
        >
          Add Member
        </Button>
      </form>
    </div>
  );
};

export default FamilyForm;
