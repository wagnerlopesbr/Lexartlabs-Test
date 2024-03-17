import React, { useState, useEffect } from "react";
import { Form, Formik, Field } from "formik";
import { Input } from "./Input.jsx";
import "../css/Edit.css";
import * as Yup from "yup";
import feather from "feather-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./styledComponents/Edit/Footer.jsx";
import Container from "./styledComponents/Edit/Container.jsx";
import Content from "./styledComponents/Edit/Content.jsx";
import Row from "./styledComponents/Edit/Row.jsx";
import Button from "./styledComponents/Edit/Button.jsx";
import BASE_URL from "../utils/BASE_URL.jsx";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Header from "./Header.jsx";

function Create() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const token = localStorage.getItem("token");
  const [openDialog, setOpenDialog] = useState(false);
  const initialValues = {
    brand_id: "",
    model_id: "",
    color: "",
    price: "",
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/brand`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBrands(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchModels = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/model`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModels(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    feather.replace();
    fetchProducts();
    fetchBrands();
    fetchModels();
  }, []);

  useEffect(() => {}, [products, brands, models]);

  const validationSchema = Yup.object({
    brand_id: Yup.string().required("Brand is required"),
    model_id: Yup.string().required("Model is required"),
    color: Yup.string().required("Color is required"),
    price: Yup.number().required("Price is required"),
  });

  const handleCreate = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${BASE_URL}/products/insert`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!validationSchema.isValidSync(values)) {
        console.log("invalid new product");
        setOpenDialog(true);
        return;
      }
      console.log("response:", response);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Formik initialValues={initialValues}>
            {({ values, setFieldValue, resetForm }) => (
              <Form style={{ width: "90%" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "30px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "#333",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    CREATE NEW PRODUCT
                  </p>
                </div>
                <Row>
                  <Field
                    as="select"
                    name="brand_id"
                    className="edit-select"
                    onChange={(e) => setFieldValue("brand_id", e.target.value)}
                    value={values.brand_id}
                  >
                    <option value="" disabled>
                      Brands
                    </option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </Field>
                  <Field
                    as="select"
                    name="model_id"
                    className="edit-select"
                    onChange={(e) => setFieldValue("model_id", e.target.value)}
                    value={values.model_id}
                  >
                    <option value="" disabled>
                      Models
                    </option>
                    {models.map((model) => (
                      <option key={model.id} value={model.id}>
                        {model.name}
                      </option>
                    ))}
                  </Field>
                  <Field
                    as="select"
                    name="color"
                    className="edit-select"
                    onChange={(e) => setFieldValue("color", e.target.value)}
                    value={values.color}
                  >
                    <option value="" disabled>
                      Colors
                    </option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Pink">Pink</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Blue">Blue</option>
                    <option value="Golden">Golden</option>
                    <option value="Silver">Silver</option>
                    <option value="Gray">Gray</option>
                  </Field>
                </Row>
                <Row>
                  <Input
                    name="price"
                    type="number"
                    required
                    placeholder="How much in BRL?"
                    style={{ border: "none" }}
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
                      onClick={() => {
                        navigate("/home");
                      }}
                      style={{ backgroundColor: "red" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="button"
                      onClick={() => {
                        handleCreate(values, { resetForm });
                      }}
                    >
                      Create
                    </Button>
                  </div>
                </Footer>
              </Form>
            )}
          </Formik>
        </Content>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <p>Invalid form! All fields are required.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

export default Create;
