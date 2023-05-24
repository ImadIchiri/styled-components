import React from "react";
import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import "./styles.css";

const StyledHeader = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #eee;
`;
const Logo = styled.h1`
  color: #333;
  font-weight: bold;
`;
const Nav = styled.nav`
  flex: 1;
  margin: 0 1rem;
  display: flex;

  @media (max-width: 470px) {
    display: none;
  }
`;
const NavList = styled.ul`
  display: flex;
  list-style: none;
`;
const NavListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 0 0.75rem;
`;
const NavListLink = styled.a`
  color: #333;
  text-decoration: none;
`;

const Button = styled.button`
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const TextSpan = styled.span`
  margin: 0 0.5rem;
`;
const TextNumber = styled.span`
  color: #fff;
  background-color: #333;
  border-radius: 1rem;
  padding: 2px 3px 2px 4px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo>Ichiri_Imad</Logo>
      <Nav>
        <NavList>
          <NavListItem>
            <NavListLink href="/">Home</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink href="/">About</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink href="/">Shop</NavListLink>
            <IoMdArrowDropdown />
          </NavListItem>
        </NavList>
      </Nav>
      <Button>
        <BsFillCartFill />
        <TextSpan>Cart</TextSpan>
        <TextNumber>0</TextNumber>
      </Button>
    </StyledHeader>
  );
};

export default Header;
