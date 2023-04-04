import styled from '@emotion/styled';

export const CastWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    margin-bottom: 20px;
    border: 2px solid gold;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  p {
    text-align: center;
    margin: 0;
    font-size: 16px;
    font-weight: bold;

    &::last-of-type {
      font-weight: normal;
      margin-top: 5px;
    }
  }
`;
