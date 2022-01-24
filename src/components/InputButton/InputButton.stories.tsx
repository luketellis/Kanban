import React from "react";
import InputButton from "./InputButton";

export default {
  component: InputButton,
  title: "InputButton",
};

const emptyString = "";
const nonEmptyString = "ABC";

export const SaveDisabled = () => (
  <InputButton
    disabled={(emptyString.length <= 0) as boolean}
    status={"Backlog"}
    type={"Save"}
    onClick={() => {}}
  />
);

export const SaveEnabled = () => (
  <InputButton
    disabled={(nonEmptyString.length <= 0) as boolean}
    status={"Backlog"}
    type={"Save"}
    onClick={() => {}}
  />
);

export const CancelButton = () => (
  <InputButton status={"Backlog"} type={"Cancel"} onClick={() => {}} />
);
