import React from "react";
import Input from "../../shared/Form Elements/input/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../shared/utils/validators";
import Button from "../../shared/Form Elements/buttons/Buttons";

const FamilyForm = () => {
  const inputHandler = () => {};

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
            errorText="first name is required"
            validators={[VALIDATOR_REQUIRE()]}
            id="firstName"
            onInput={inputHandler}
          />
          <Input
            placeholder="last name"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText="last name is required"
            validators={[VALIDATOR_REQUIRE()]}
            id="lastName"
            onInput={inputHandler}
          />
        </div>
        <div className=" d-flex flex-row justify-content-between py-3">
          <Input
            placeholder="Father's name"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText="father's name is required"
            validators={[VALIDATOR_REQUIRE()]}
            id="fatherName"
            onInput={inputHandler}
          />
          <Input
            placeholder="Mother's name"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText="mothers's name is required"
            validators={[VALIDATOR_REQUIRE()]}
            id="motherName"
            onInput={inputHandler}
          />
        </div>
        <div className=" d-flex flex-row justify-content-between py-3">
          <Input
            placeholder="proffession"
            className="form-control"
            style={{ width: "40vw" }}
            element="input"
            type="text"
            errorText="proffession name is required"
            validators={[VALIDATOR_REQUIRE()]}
            id="proffession"
            onInput={inputHandler}
          />
          <div className="d-flex justify-content-between" style={{ columnGap:'5rem'}}>
            <label >date of birth</label>
            <Input
              placeholder="Date of Birth"
              className="form-control align-items-center "
              element="input"
              type="date"
              errorText=""
              validators={[VALIDATOR_REQUIRE()]}
              id="DOB"
              style={{ width: "20vw", marginRight:'2rem' }}
              divClass='md-form md-outline input-with-post-icon datepicker'
              onInput={inputHandler}
            />
            <div className="d-flex">
              <label>isAlive</label>
              <Input
                placeholder="Date of Birth"
                className=""
                name="is alive"
                element="input"
                type="radio"
                value="yes"
                errorText=""
                validators={[VALIDATOR_REQUIRE()]}
                id="isAlive true"
                onInput={inputHandler}
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
                id="isAlive false"
                onInput={inputHandler}
              />
            </div>
          </div>
        </div>
        <Input
          placeholder="pressent address"
          className="form-control my-3"
          element="input"
          type="text"
          errorText="bio must be at least 10 characters"
          validators={[VALIDATOR_MINLENGTH(10)]}
          id="bio"
          onInput={inputHandler}
        />
        <Input
          placeholder="BIO"
          className="form-control my-3"
          element="text area"
          type="text"
          errorText="bio must be at least 10 characters"
          validators={[VALIDATOR_MINLENGTH(10)]}
          id="bio"
          onInput={inputHandler}
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
