import React from "react";

const updateProductFetch = async (url, body) => {
  const response = await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};

export default updateProductFetch;
