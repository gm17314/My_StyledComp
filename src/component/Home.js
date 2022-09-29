import React from "react";
import styled from "styled-components";
import employeepic from "../Image/employeepic.jpg"
function Home() {
  const Home = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
  `;
  const LeftDiv = styled.div`
    width: 60%;
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
   
  `;
  const Title = styled.h1`
    width: 80%;
    font-size: 8rem;
  `;
  const Para = styled.p`
    width: 80%;
    font-size: 2rem;
  `;
  const Contact = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
  `;
  const Button = styled.button`
    width: 30%;
    height: 6rem;
    background-color: #001a66;
    border-radius: 1rem;
    border: 0.5px solid black;
    font-size: 2.2rem;
    color: white;
    cursor: pointer;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  `;
  const Number = styled.p`
    width: 50%;
    font-size: 2rem;
  `;
  const RightDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 88vh;
  `;
  return (
    <Home>
      <LeftDiv>
        <Title>Creativity By Creaters👩‍💻</Title>
        <Para>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, sint
          totam sunt quibusdam sed, autem mollitia est tempora repellat quam
          officia vero aliquid doloremque quos voluptates laboriosam.
        </Para>
        <Contact>
          <Button>Start A Project</Button>
          <Number>
            <span style={{ color: "red" }}>Call Us (+91)851-280-6XXX</span>
            <br />
            For any questions or concern
          </Number>
        </Contact>
      </LeftDiv>
      <RightDiv>
        <img src={employeepic} width={"80%"} height={"90%"} style={{boxShadow:"0px 0px 10px 0.6px black",borderRadius:"2px"}} alt="" />
      </RightDiv>
    </Home>
  );
}

export default Home;
