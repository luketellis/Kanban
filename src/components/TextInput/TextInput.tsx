import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import "./textInput.css";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInput(props: ITextInputProps) {
  return <input className="text-input" maxLength={30} {...props}></input>;
}

export default TextInput;
