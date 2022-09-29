import React from "react";
import styled from "styled-components";
import {mobile} from "./Responsive";
function Footer() {
  const Footer = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-between;
    background-color:  #f2f2f2;
    ${mobile({
      backgroundColor:"red"
    })}
  `;
  const CopyRight = styled.div`
    width: 40%;
    height: 20vh;
  `;
  const Social = styled.pattern`
    font-size: 3rem;
    padding-left: 2rem;
  `;
  const Heading = styled.h3`
    font-family: "Courier New", Courier, monospace;
    margin-left: 2rem;
    font-size: 3rem;
  `;
  const Para = styled(Heading)`
  font-size: 2rem;margin-top:2rem;
  font-family: 'Courier New', Courier, monospace;
`;
const Addresss= styled(Heading)`
font-size: 2rem;margin-top:2rem;
font-family: 'Courier New', Courier, monospace;
margin: 1rem;
`;


  return (
    <Footer>
      <CopyRight>
        <Heading>Follow Us@</Heading>
        <Social>
          <i class="fa fa-facebook-f" style={{ marginLeft: "1rem" }}></i>
          <i style={{ marginLeft: "1rem" }} class="fa fa-twitter"></i>
          <i style={{ marginLeft: "1rem" }} class="fa fa-instagram"></i>
          <i style={{ marginLeft: "1rem" }} class="fa fa-github"></i>
        </Social>
        <Para>CopyRight&copy; 2022 A&G.com</Para>
      </CopyRight>
      <Addresss>
        <Para>A&G,Sec-116,Noida</Para>
        <Para>Uttar Pradesh,London,America</Para>
      </Addresss>
    </Footer>

  );
}

export default Footer;
