import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25em;
  max-width: 1290px;
    margin: 0 auto;
`;

export const LogoContainer = styled(Link)`
  display: inline-block;
  padding: 25px;
`;

export const NavLinks = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
`;

export const NavLinkItem = styled.li`
  padding: 0 1em;
  &.dropdown-menu {
    position: relative;
  }
`;

export const Logo = styled.img`
  max-width: 240px;
`;

export const NavLink = styled(Link)`
  padding: 0.5em;
  margin: 0;
  border-bottom: 1px dashed #fff;
  border-top: 1px dashed #fff;
  position: relative;
  text-decoration: none;

  &:hover {
    border-bottom: 1px dashed #348371;
    border-top: 1px dashed #348371;
    background-color: #e8ece4;
  }

  &:focus {}

  &.logged {
    color: blue;
  }
`;

export const FlexGrow = styled.div`
  flex: 1;
`;

export const Main = styled.div`
  max-width: 1290px;
  margin: 0 auto;
  padding: 0 25px;
`;

export const CartPosition = styled.a`
  position: relative;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ccc;
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

export const DropdownMenuItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;
