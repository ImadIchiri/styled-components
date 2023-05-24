import React from "react";
import "./styles.css";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #333;
  padding: 1rem;
`;
const Text = styled.p`
  color: #fff;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Text>Copyright &copy; &lt; ICHIRI Imad /&gt; 2023</Text>
    </StyledFooter>
  );
};

export default Footer;
