import styled from '@emotion/styled';

export const ReviewsWrapper = styled.div`
  padding: 20px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 15px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    border: 2px solid gold;
    border-radius: 5px;
  }

  p:first-of-type {
    font-weight: bold;
  }

  p:last-of-type {
    margin-top: 10px;
  }
`;
