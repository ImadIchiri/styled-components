import React from "react";
import "./styles.css";
import styled from "styled-components";

const StyledLanding = styled.section`
  height: 50vh;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  text-align: center;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 3.25rem;
`;
const SubTitle = styled.p`
  color: #bcbcbc;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;
const Landing = () => {
  return (
    <StyledLanding>
      <Title>Shop in style</Title>
      <SubTitle>With this shop homepage template</SubTitle>
    </StyledLanding>
  );
};

export default Landing;
//
