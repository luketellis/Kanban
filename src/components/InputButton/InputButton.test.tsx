import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import InputButton from "./InputButton";

const buttonType = "Save";
const emptyString = "";
const oneCharacterString = "a";

test("Input button is disabled when string is empty", () => {
  const mockCallBack = jest.fn();

  render(
    <InputButton
      disabled={(emptyString.length <= 0) as boolean}
      status={"Backlog"}
      type={buttonType}
      onClick={mockCallBack}
    />
  );

  const inputBtn = screen.getByTestId("input-btn");
  expect(inputBtn).toBeDisabled();
});

test("Input button is enabled when string is not empty", () => {
  const mockCallBack = jest.fn();

  render(
    <InputButton
      disabled={(oneCharacterString.length <= 0) as boolean}
      status={"Backlog"}
      type={buttonType}
      onClick={mockCallBack}
    />
  );

  const inputBtn = screen.getByTestId("input-btn");
  expect(inputBtn).toBeEnabled();
});

test("Input button onclick called when string is not empty", () => {
  const mockCallBack = jest.fn();

  render(
    <InputButton
      disabled={(oneCharacterString.length <= 0) as boolean}
      status={"Backlog"}
      type={buttonType}
      onClick={mockCallBack}
    />
  );

  const inputBtn = screen.getByTestId("input-btn");
  inputBtn.click();

  const functionCalls = mockCallBack.mock.calls.length;
  expect(functionCalls).toEqual(1);
});
