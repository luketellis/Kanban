import React from "react";
import "./textInput.css";

interface Props {
  onChange: React.Dispatch<React.SetStateAction<any>>;
  placeholder: string;
  value: string;
}

function TextInput({ onChange, placeholder, value }: Props) {
  return (
    <input
      className="text-input"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      value={value as string}
    ></input>
  );
}

export default TextInput;
