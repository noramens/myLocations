import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const NavTitle = styled.h1`
  color: #f2cc8f;
  font-weight: 600;
  font-size: 2.4rem;
`;

export const NavAction = styled.button`
  background-color: #f2cc8f;
  outline: #f2cc8f;
  border: 1px solid #f2cc8f;
  padding: 1rem;
  border-radius: 3px;
  margin-right: 1rem;
  font-weight: 600;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
  }
`;

export const FooterBar = styled.footer`
  display: flex;
  justify-content: center;
`;
