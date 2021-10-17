import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  justify-items: center;
  align-items: center;

  padding: 0.5rem 0;

  background-color: var(--primary-color);

  h1 {
    font-size: 1.6rem;
    color: var(--text-light);
  }

  span {
    color: var(--text-light);
    cursor: pointer;
    padding: 1rem 0.5rem;
    font-weight: 500;
  }
`;
