import React from "react";

export const getApiFetch = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
