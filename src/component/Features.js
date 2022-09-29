import React from "react";
import styled from "styled-components";
import goodbusinnes from "../Image/goodbusinnes.jpg";
function Features() {
  const Feature = styled.div`
    width: 100%;
    height: 110vh;
    display: flex;
    align-items: center;
    /* background-color:; */
    background-image: linear-gradient(#E7D5C4,#E7D5C4,#ffffe6);
    /* border-top: 0.1px solid grey; */
  `;
  const LeftDiv = styled.div`
    width: 45%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const RightDiv = styled.div`
    width: 53%;
    height: 90vh;
    display: flex;
    border-radius: 3px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* box-shadow:0px 0px 100px 0px #595959; */
  `;
  const Title = styled.h1`
    width: 90%;
    font-size: 7rem;
  `;
   const Span=styled.span`
   font-weight: 400;
   `
  const Para = styled.p`
    width: 90%;
    font-size: 2rem;
  `;
  const Button = styled.button`
    width: 32%;
    height: 6rem;
    background-color: #001a66;
    border-radius: 2rem;
    border: 0.5px solid black;
    font-size: 2.2rem;
    color: white;
    cursor: pointer;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  `;
  return (
    <Feature>
      <LeftDiv>
        <img src={goodbusinnes} width={"75%"} height={"90%"} style={{borderRadius:"2px"}} alt="" />
      </LeftDiv>
      <RightDiv>
        <Title>
            good <Span>design</Span><br />good <Span>business</Span>
        </Title>
        <Para>
            <i style={{fontSize:"2.8rem"}}>We know that good design means good business.</i><br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.  aperiam, sunt alias natus quidem magnam vel facilis et cupiditate recusandae, distinctio, id animi ipsa. Amet vero eaque quasi repellendus har mollitia sunt cupiditate earum. Eveniet est temporibus quae ipsum incidunt? <br /><br />
            We care our business and guarantee you to achieve marketing goals.
        </Para>
        <Button>Learn More</Button>
      </RightDiv>
    </Feature>
  );
}

export default Features;
