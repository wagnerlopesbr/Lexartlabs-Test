import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Input } from "./Input";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Footer from "./styledComponents/Login/Footer";
import Container from "./styledComponents/Login/Container";
import Content from "./styledComponents/Login/Content";
import Row from "./styledComponents/Login/Row";
import Button from "./styledComponents/Login/Button";
import RadioButtonWrapper from "./styledComponents/Login/RadioButtonWrapper.jsx";
import RadioButtonInput from "./styledComponents/Login/RadioButtonInput";
import RadioButtonLabel from "./styledComponents/Login/RadioButtonLabel";

const RadioButton = ({ label, ...props }) => (
  <RadioButtonWrapper>
    <RadioButtonInput type="radio" {...props} />
    <RadioButtonLabel>{label}</RadioButtonLabel>
  </RadioButtonWrapper>
);

function Login() {
  const [action, setAction] = useState("");
  console.log("ACTION:", action);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Must be a valid email address")
      .matches(
        emailRegex,
        "Invalid email format. Acceptable format: name@email.com"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Too short password. Minimum 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <Container>
      <Content>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, isSubmitting }) => (
            <Form style={{ width: "90%" }}>
              <RadioButton
                id="register"
                name="option"
                value="register"
                label="Register"
                onChange={() => {
                  setAction("register");
                }}
              />
              <RadioButton
                id="login"
                name="option"
                value="login"
                label="Login"
                onChange={() => {
                  setAction("login");
                }}
              />
              <Row>
                <Input name="email" required placeholder="your@email.com" />
              </Row>
              <Row>
                <Input
                  name="password"
                  required
                  type="password"
                  placeholder="enter your password"
                />
              </Row>
              <Footer>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    type="button"
                    disabled={action === "register" ? isSubmitting : true}
                    style={{
                      backgroundColor: action === "register" ? "green" : "gray",
                    }}
                  >
                    Register
                  </Button>
                  <Button
                    type="submit"
                    disabled={action === "login" ? isSubmitting : true}
                    style={{
                      backgroundColor: action === "login" ? "green" : "gray",
                    }}
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    Login
                  </Button>
                </div>
              </Footer>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
}

export default Login;
