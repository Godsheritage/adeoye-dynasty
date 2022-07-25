import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_SEX,
} from "../../shared/utils/validators";
import Input from "../../shared/Form Elements/input/Input";
import Button from "../../shared/Form Elements/buttons/Buttons";

const FamilyForm = () => {
  // useReducer()

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
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <label style={{ fontSize: ".8rem", margin: 0 }}>
                date of birth
              </label>
              <Input
                placeholder="Date of Birth"
                className="form-control align-items-center "
                element="input"
                type="text"
                errorText=""
                validators={[VALIDATOR_REQUIRE()]}
                id="DOB"
                onFocus="(this.type='date')"
                style={{ width: "15rem", marginRight: "2rem" }}
                // divClass="md-form md-outline input-with-post-icon datepicker"
                onInput={inputHandler}
              />
            </div>
            <Input
              placeholder="sex"
              className="form-control align-items-center "
              element="input"
              type="text"
              errorText="must be either male or female"
              validators={[VALIDATOR_SEX("male", "female")]}
              id="DOB"
              style={{ width: "15rem" }}
              divClass="md-form md-outline input-with-post-icon datepicker"
              onInput={inputHandler}
            />
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
