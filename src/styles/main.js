import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav ul {
    display: flex;
    column-gap: 2rem;
    color: white;
  }
`;

export const ProductsContainer = styled.div`
  .wrapper {
    margin-block-start: 3rem;
  }

  .productsTable {
    margin-block-start: 100px;
    display: block;
    width: 100%;
    border-radius: 8px;
    border: 2px solid #e1e1e1;
    padding: 1rem 2rem;
    .table-item-head {
      display: flex;
      justify-content: space-between;
    }
    .table-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #e1e1e1;
      p {
        color: var(--color-purple);
      }
      .buttonsActions {
        display: flex;
        column-gap: 1rem;
      }
    }
  }
`;

export const Form = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  margin-block-start: 100px !important;
  flex-direction: column;
  .field {
    display: flex;
    flex-direction: column;
    margin-block: 1rem;
    input,
    select {
      border-radius: 8px;
      padding: 0.5rem 0.75rem;
      outline: none;
    }
  }

  .button {
    padding: 1rem;
    border-radius: 8px;
    background-color: #1414f9eb;
    color: white;
    font-weight: bold;
    margin-block-start: 1rem;
  }
`;
