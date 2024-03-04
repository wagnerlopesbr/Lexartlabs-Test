import React, { useState, useEffect } from "react";
import { Form, Formik, Field } from "formik";
import { Input } from "./Input.jsx";
import "../css/Edit.css";
import feather from "feather-icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./styledComponents/Edit/Footer.jsx";
import Container from "./styledComponents/Edit/Container.jsx";
import Content from "./styledComponents/Edit/Content.jsx";
import Row from "./styledComponents/Edit/Row.jsx";
import Button from "./styledComponents/Edit/Button.jsx";
import BASE_URL from "../utils/BASE_URL.jsx";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const products = await axios.get(`${BASE_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(products.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBrands = async () => {
    try {
      const brands = await axios.get(`${BASE_URL}/brand`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBrands(brands.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchModels = async () => {
    try {
      const models = await axios.get(`${BASE_URL}/model`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModels(models.data);
    } catch (error) {
      console.error(error);
    }
  };

  const formatPrice = (price) => {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    feather.replace();
    fetchProducts();
    fetchBrands();
    fetchModels();
  }, []);

  const productById = products.find((product) => product.id === parseInt(id));

  const initialValues = {
    brand_id: productById ? productById.brand_id : "",
    model_id: productById ? productById.model_id : "",
    color: productById ? productById.color : "",
    price: productById ? productById.price : "",
  };

  const handleEdit = async (id, values) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/products/update/${id}`,
        values
      );
      console.log("response:", response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (values) => {
    console.log("handleSubmit VALUES:", values);

    await handleEdit(id, values);
    navigate("/home");
  };

  return (
    <Container>
      <Content>
        <Formik initialValues={initialValues}>
          {({ values, setFieldValue }) => (
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
                <Field
                  as="select"
                  name="color"
                  className="edit-select"
                  onChange={(e) => setFieldValue("color", e.target.value)}
                  value={values.model_id}
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
                  placeholder={
                    productById ? formatPrice(productById.price) : ""
                  }
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
                      handleSubmit(values);
                    }}
                  >
                    Confirm
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

export default Edit;
