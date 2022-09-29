import React from "react";
import styled from "styled-components";

function Price() {
  const Price = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const Shape = styled.div`
   clip-path: polygon(51% 0, 100% 0, 100% 50%, 100% 100%, 56% 100%, 25.2% 100%);
    background-color: #FE7278 ;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  `;
  const Boxe = styled(Price)`
    width: 25%;
    height: 70%;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 0 5px 2px;
  `;
  const Heading = styled.h3`
    font-size: 1.5rem;
  `;
  const Span = styled.span`
    font-size: 3rem;
  `;
  const Title = styled.h4`
    font-size: 2.5rem;
    border: 2px solid red;
    border-radius: 1rem;
    color: red;
    padding: 1rem;
  `;
  const Button = styled.button`
    width: 35%;
    height: 5rem;
    background-color: #001a66;
    border-radius: 0.7rem;
    font-size: 2.7rem;
    color: white;
    cursor: pointer;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin: auto;
  `;
  const Listitems = styled.li`
    list-style: none;
    margin-top: 4rem;
    font-size: 2.7rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  `;
  return (
    <Price>
        <Shape/>
      <Boxe>
        <Heading>
          $<Span>50</Span>/month
        </Heading>
        <Title>Beginner</Title>
        <Listitems>Two hours/day </Listitems>
        <Listitems>Flexible Timing</Listitems>
        <Listitems>10 Projects</Listitems>
        <Button>Join now</Button>
      </Boxe>
      <Boxe>
        <Heading>
          $<Span>80</Span>/month
        </Heading>
        <Title>InterMediate</Title>
        <Listitems>Three hours/day </Listitems>
        <Listitems>Flexible Timing</Listitems>
        <Listitems>12 Projects</Listitems>
        <Button>Join now</Button>
      </Boxe>
      <Boxe>
        <Heading>
          $<Span>100</Span>/month
        </Heading>
        <Title>Beginner</Title>
        <Listitems>Four hours/day </Listitems>
        <Listitems>Flexible Timing</Listitems>
        <Listitems>15 Projects</Listitems>
        <Button>Join now</Button>
      </Boxe>
    </Price>
  );
}

export default Price;
