import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 25rem;
  height: 25rem;

  background: #fff;
  padding: 1.5rem 2rem;

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p {
    color: #ff3333;
    margin-bottom: 0.9rem;
    border: 2px solid #ff3333;
    border-radius: 0.25rem;
    padding: 0.625rem;
    width: 100%;
    text-align: center;
  }

  button {
    font-weight: 600;
    font-size: 1.25rem;
    height: 3.5rem;
    border-radius: 0.25rem;
    width: 100%;
    cursor: pointer;
    background-color: var(--primary-color);
    border: 0;
    color: #fff;
    transition: 0.2s background-color;

    &:hover {
      background-color: var(--secondary-color);
    }
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  padding: 0 3rem;
  border-radius: 0.25rem;

  background-color: var(--primary-color);
`;

export const InputWrapper = styled.div`
  input {
    height: 3rem;
    padding: 0 1.25rem;
    border-radius: 0.25rem;
    color: #777;
    font-size: 1.15rem;
    width: 100%;
    border: 2px solid #ddd;

    &:nth-of-type(1) {
      margin-bottom: 1rem;
    }
  }
`;
