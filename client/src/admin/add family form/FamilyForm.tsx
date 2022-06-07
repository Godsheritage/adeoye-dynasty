import React from "react";
import Input from "../../shared/Form Elements/input/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
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
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            placeholder="last name"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText=""
            validators={[VALIDATOR_REQUIRE()]}
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
            validators={[VALIDATOR_REQUIRE()]}
          />
          <Input
            placeholder="Mother's name"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText=""
            validators={[VALIDATOR_REQUIRE()]}
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
            validators={[VALIDATOR_REQUIRE()]}
          />
          <div className="d-flex justify-content-between">
            <Input
              placeholder="Date of Birth"
              className="form-control align-items-center"
              element="input"
              type="date"
              errorText=""
              validators={[VALIDATOR_REQUIRE()]}
            />
            <div className="d-flex gap-2  ">
              <p>isAlive</p>
              <Input
                placeholder="Date of Birth"
                className=""
                name="is alive"
                element="input"
                type="radio"
                value="yes"
                errorText=""
                validators={[VALIDATOR_REQUIRE()]}
              />
              <Input
                placeholder="Date of Birth"
                name="is alive"
                className=""
                element="input"
                value="No"
                type="radio"
                errorText=""
                validators={[VALIDATOR_REQUIRE()]}
              />
            </div>
          </div>
        </div>
        <Input
          placeholder="BIO"
          className="form-control my-3"
          element="text area"
          type="text"
          errorText=""
          validators={[VALIDATOR_REQUIRE()]}
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
