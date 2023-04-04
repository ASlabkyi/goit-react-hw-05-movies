import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import styled from '@emotion/styled';

import { Nav, Main } from './Layout.styled';

const StyledLink = styled(NavLink)`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const Layout = () => {
  return (
    <div>
      <Nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </Nav>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </div>
  );
};
