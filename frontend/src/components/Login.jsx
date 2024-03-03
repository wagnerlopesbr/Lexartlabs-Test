import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Input } from "./Input";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./styledComponents/Login/Footer";
import Container from "./styledComponents/Login/Container";
import Content from "./styledComponents/Login/Content";
import Row from "./styledComponents/Login/Row";
import Button from "./styledComponents/Login/Button";
import RadioButtonWrapper from "./styledComponents/Login/RadioButtonWrapper.jsx";
import RadioButtonInput from "./styledComponents/Login/RadioButtonInput";
import RadioButtonLabel from "./styledComponents/Login/RadioButtonLabel";
import BASE_URL from "../utils/BASE_URL.jsx";

const RadioButton = ({ label, ...props }) => (
  <RadioButtonWrapper>
    <RadioButtonInput type="radio" {...props} />
    <RadioButtonLabel>{label}</RadioButtonLabel>
  </RadioButtonWrapper>
);

function Login() {
  const [action, setAction] = useState("");
  console.log("action:", action);
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

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data, token } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/home");
      } else {
        console.error("No token received");
      }
    } catch (error) {
      console.error("Login error: ", error);
      window.alert("Invalid email or password");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRegister = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/insert`, values);
      console.log("response:", response);
      window.alert("User registered successfully.");
      resetForm();
    } catch (error) {
      console.error("Register error: ", error);
      window.alert(
        "Something went wrong. \nInvalid data or user already exists. \nPlease try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <Content>
        <Formik
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("onSubmit values:", values);
            if (action === "register") {
              handleRegister(values, { setSubmitting, resetForm });
            } else {
              handleLogin(values, { setSubmitting });
            }
          }}
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
                  <Button type="submit">
                    {action === "register" ? "Register" : "Login"}
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
