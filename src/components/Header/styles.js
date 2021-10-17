import styled from "styled-components";

export const Container = styled.div`
  padding: .5rem 2rem;

  background-color: var(--primary-color);

  header {
    max-width: 1400px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: .25fr 1fr .25fr;

    justify-items: center;
    align-items: center;

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

  }

  @media (max-width: 720px) {

    header {
      grid-template-columns: auto .5fr;
      
      h1 {
        display: none;
      }
    }
  }
}
`;
