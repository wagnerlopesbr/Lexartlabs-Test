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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import bgimg from "../utils/images/bg.gif";
import cellphonecataloglogo from "../utils/images/cellphone-catalog-logo.png";

const RadioButton = ({ label, ...props }) => (
  <RadioButtonWrapper checked={props.checked}>
    <RadioButtonInput type="radio" {...props} />
    <RadioButtonLabel>{label}</RadioButtonLabel>
  </RadioButtonWrapper>
);

function Login() {
  const [action, setAction] = useState("");
  const [openLoginDialog, setLoginOpenDialog] = useState(false);
  const [openRegisterErrorDialog, setRegisterErrorOpenDialog] = useState(false);
  const [openRegisterDialog, setRegisterOpenDialog] = useState(false);
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
      setLoginOpenDialog(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleRegister = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await axios.post(`${BASE_URL}/users/insert`, values);
      console.log("response:", response);
      setRegisterOpenDialog(true);
      resetForm();
    } catch (error) {
      console.error("Register error: ", error);
      setRegisterErrorOpenDialog(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "120px",
      }}
    >
      <div
        style={{
          backgroundColor: "transparent",
          paddingBottom: "40px",
        }}
      >
        <img src={cellphonecataloglogo} width="500px" />
      </div>
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
              <div
                style={{
                  textAlign: "center",
                  paddingBottom: "20px",
                }}
              >
                <RadioButton
                  id="register"
                  name="option"
                  value="register"
                  label="Register"
                  checked={action === "register"}
                  onChange={() => {
                    setAction("register");
                  }}
                />
                <RadioButton
                  id="login"
                  name="option"
                  value="login"
                  label="Login"
                  checked={action === "login"}
                  onChange={() => {
                    setAction("login");
                  }}
                />
              </div>

              <Row style={{ paddingLeft: "25px" }}>
                <Input
                  name="email"
                  required
                  placeholder="your@email.com"
                  style={{
                    border: "none",
                  }}
                />
              </Row>
              <Row style={{ paddingLeft: "25px" }}>
                <Input
                  name="password"
                  required
                  type="password"
                  placeholder="enter your password"
                  style={{
                    border: "none",
                  }}
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
                  <Button type="submit" style={{ width: "100px" }}>
                    {action === "register" ? "Register" : "Login"}
                  </Button>
                </div>
              </Footer>
            </Form>
          )}
        </Formik>
      </Content>

      <Dialog open={openLoginDialog} onClose={() => setLoginOpenDialog(false)}>
        <DialogTitle>Login Error</DialogTitle>
        <DialogContent>
          <p>All fields are required and user must exist.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setLoginOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openRegisterErrorDialog}
        onClose={() => setRegisterErrorOpenDialog(false)}
      >
        <DialogTitle>Register Error</DialogTitle>
        <DialogContent>
          <p>All fields are required and email must be unique.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRegisterErrorOpenDialog(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openRegisterDialog}
        onClose={() => setRegisterOpenDialog(false)}
      >
        <DialogTitle>Success!</DialogTitle>
        <DialogContent>
          <p>New user created!</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setRegisterOpenDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Login;
