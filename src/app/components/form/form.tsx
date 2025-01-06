"use client";
import {
    FormControl,
  FormTitle,
  FormWrapper,
  Input,
  Label,
  SubmitButton,
} from "./formStyles";

export default function Form() {
  return (
    <FormWrapper>
      <FormTitle>Sign in</FormTitle>
      <FormControl>
        <Label>Email</Label>
        <Input />
      </FormControl>
      <SubmitButton>Sign in</SubmitButton>
    </FormWrapper>
  );
}
