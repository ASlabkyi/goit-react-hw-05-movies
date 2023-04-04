import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  color: #333;
`;

export const Poster = styled.img`
  width: 100%;
  max-width: 500px;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const UserScore = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Overview = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Genres = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const GenreList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const GenreItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const AdditionalInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const AdditionalInfoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const AdditionalInfoItem = styled.li`
  text-align: center;
  margin-bottom: 0.5rem;
`;
