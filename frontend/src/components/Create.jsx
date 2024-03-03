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

function Create() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const token = localStorage.getItem("token");
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

  const handleCreate = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${BASE_URL}/products/insert`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response:", response);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Content>
        <Formik initialValues={initialValues}>
          {({ values, setFieldValue, handleSubmit, resetForm }) => (
            <Form style={{ width: "90%" }}>
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
              </Row>
              <Row>
                <Input name="color" required placeholder="What color?" />
              </Row>
              <Row>
                <Input
                  name="price"
                  type="number"
                  required
                  placeholder="How much in BRL?"
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
    </Container>
  );
}

export default Create;
