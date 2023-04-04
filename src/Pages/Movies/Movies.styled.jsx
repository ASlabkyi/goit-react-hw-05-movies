import styled from '@emotion/styled';

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;

    input[type='text'] {
      padding: 0.5rem;
      margin-right: 0.5rem;
      border-radius: 0.25rem;
      border: 1px solid #ccc;
      font-size: 1rem;
      width: 20rem;

      &:focus {
        outline: none;
        border-color: #333;
      }
    }

    button[type='submit'] {
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      background-color: #4b5563;
      color: white;
      font-size: 1rem;

      &:hover {
        cursor: pointer;
        background-color: #1f2937;
      }
    }
  }
`;
