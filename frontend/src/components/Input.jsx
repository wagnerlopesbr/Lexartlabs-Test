import React from "react";
import { Field, ErrorMessage } from "formik";
import Container from "../components/styledComponents/Input/Container";
import FieldStyled from "../components/styledComponents/Input/FieldStyled";
import Label from "../components/styledComponents/Input/Label";
import RequiredLabel from "../components/styledComponents/Input/RequiredLabel";
import ErrorStyled from "../components/styledComponents/Input/ErrorStyled";

export const Input = ({ name, type = "", label, required, ...props }) => {
  return (
    <Container>
      <Label>
        {label || name}
        {required && <RequiredLabel>*</RequiredLabel>}
      </Label>
      <Field as={FieldStyled} name={name} type={type} {...props} />
      <ErrorMessage name={name} component={ErrorStyled} />
    </Container>
  );
};
