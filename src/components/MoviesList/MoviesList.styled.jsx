import styled from '@emotion/styled';

export const MoviesListContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 10px;
    margin: 0;
    padding: 0;

    li {
      a {
        color: #333;
        text-decoration: none;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: #ff4500;
        }
      }
    }
  }
`;
