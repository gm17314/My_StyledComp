import React from 'react'
import styled  from 'styled-components';
function thapa() {
  let FavColor="lightblue";
  const Button=styled.button `
  border-radius:2px solid red;
  font-size:40px;
  background-color:black;
  color:red;
  transition: color 2s;
  &:hover{
    cursor: pointer;
    color: green;
  }
  span{
    color: ${FavColor};
  }
  `;
  const Para=styled.p`
  color:green;
  `;
  const Heading=styled.h4`
  background-color:${(props)=>props.bg};
  `;
  return (
    <div>

      <Button>Click here<span>!!!</span></Button>
      <Para>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio cupiditate fugit similique aliquid molestiae animi, odit ex doloremque.</Para>
      <Heading bg="blue">I'm kabir and Gaurav Maurya</Heading>

    </div>

  )
}

export default thapa
