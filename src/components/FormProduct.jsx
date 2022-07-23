import React, { useState } from "react";
import createProductFetch from "../helper/createProductFetch";
import { Form, FormContainer } from "../styles/main";

const FormProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    laboratory: "",
  });
  const [error, setError] = useState(false);

  const { name, price, quantity, laboratory } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, price, quantity, laboratory].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    console.log("estamos aquiii :D");
    createProductFetch(`http://127.0.0.1:3000/products`, form).then((res) => {
      console.log(res);
    });
  };

  return (
    <Form>
      <FormContainer className="mt-4 " onSubmit={handleSubmit}>
        <h2>Create New Product</h2>
        <div className="field">
          <label>Name: </label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div className="field">
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Quantity: </label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Laboratory: </label>
          <select name="laboratory" value={laboratory} onChange={handleChange}>
            <option value="">--Seleccione--</option>
            <option value="Genfar">Genfar</option>
            <option value="GSK">GSK</option>
            <option value="Hersil">Hersil</option>
            <option value="FarmaIndustria">FarmaIndustria</option>
          </select>
        </div>
        <button className="button btn-primary" type="submit">
          Crear
        </button>
      </FormContainer>
    </Form>
  );
};

export default FormProduct;
