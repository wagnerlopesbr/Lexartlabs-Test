import React, { useState, useEffect } from "react";
import { Form, Formik, Field } from "formik";
import { Input } from "./Input.jsx";
// import * as Yup from "yup";
import "../css/Edit.css";
import feather from "feather-icons";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./styledComponents/Edit/Footer.jsx";
import Container from "./styledComponents/Edit/Container.jsx";
import Content from "./styledComponents/Edit/Content.jsx";
import Row from "./styledComponents/Edit/Row.jsx";
import Button from "./styledComponents/Edit/Button.jsx";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);

  const fetchProducts = async () => {
    try {
      const products = await axios.get("http://localhost:8000/products");
      setProducts(products.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBrands = async () => {
    try {
      const brands = await axios.get("http://localhost:8000/brand");
      setBrands(brands.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchModels = async () => {
    try {
      const models = await axios.get("http://localhost:8000/model");
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
        `http://localhost:8000/products/update/${id}`,
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

  // const validationSchema = Yup.object().shape({
  //   brand_id: Yup.number().required("Brand is required"),
  //   model_id: Yup.number().required("Model is required"),
  //   color: Yup.string().required("Color is required"),
  //   price: Yup.number()
  //     .typeError("Price must be a valid number")
  //     .required("Price is required"),
  // });

  return (
    <Container>
      <Content>
        <Formik
          initialValues={initialValues}
          // validationSchema={validationSchema}
        >
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
              </Row>
              <Row>
                <Input
                  name="color"
                  required
                  placeholder={productById ? productById.color : ""}
                />
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
