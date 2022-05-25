import styled from "styled-components";

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body);
    }

    & + input {
        margin-top: 1rem;
    }
  }

    button {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`