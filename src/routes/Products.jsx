import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getApiFetch } from "../helper/getApiFetch";
import updateProductFetch from "../helper/updateProductFetch";
import { ProductsContainer } from "../styles/main";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getApiFetch(`http://127.0.0.1:3000/products`).then((res) => {
      console.log(res);
      setProducts(res);
    });
  }, []);

  const saleProduct = (item) => {
    let newProduct = { ...item, quantity: item.quantity - 1 };
    console.log(`http://127.0.0.1:3000/products/${item.id}`);
    updateProductFetch(
      `http://127.0.0.1:3000/products/${item.id}`,
      newProduct
    ).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  return (
    <ProductsContainer>
      <table class="table bg-darjk mt-3">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">$ x Unit.</th>
            <th score="col">Code</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.code}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => saleProduct(item)}
                  >
                    sale -1
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ProductsContainer>
  );
};

export default Products;
