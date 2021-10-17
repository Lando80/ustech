import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2rem;
`;

export const Table = styled.table`
  display: block;
  overflow-x: auto;
  width: 100%;

  border-spacing: 0;
  border-collapse: collapse;
  border-radius: 0.25rem;

  padding-bottom: 0.5rem;

  thead th {
    white-space: nowrap;
    font-size: 0.85rem;
    background-color: var(--secondary-color);
    color: var(--text-light);
    padding: 1rem;
    text-align: center;

    &:first-of-type {
      border-radius: 0 0 0 0.25rem;
    }

    &:last-of-type {
      border-radius: 0 0 0.25rem 0;
    }
  }

  tbody {
    tr {
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }

      &.green-row td {
        background-color: var(--secondary-color);
        color: var(--text-light);
      }

      &.white-row td {
        background-color: white;
        color: var(--text-dark);
      }

      td {
        white-space: nowrap;

        padding: 1rem;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
        border-left: 1px solid var(--cell-border-color);
        border-right: 1px solid var(--cell-border-color);

        &:first-of-type {
          border-left: none;
          border-top-left-radius: 0.25rem;
          border-bottom-left-radius: 0.25rem;
        }

        &:last-of-type {
          border-right: none;
          border-top-right-radius: 0.25rem;
          border-bottom-right-radius: 0.25rem;
        }
      }
    }
  }
`;
