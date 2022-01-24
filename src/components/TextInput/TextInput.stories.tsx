import React from "react";
import TextInput from "../TextInput/TextInput";

export default {
  component: TextInput,
  title: "TextInput",
};

export const TitleInput = () => (
  <TextInput onChange={(e) => {}} placeholder="New Title..." value="" />
);

export const DescriptionInput = () => (
  <TextInput onChange={(e) => {}} placeholder="New Description..." value="" />
);
