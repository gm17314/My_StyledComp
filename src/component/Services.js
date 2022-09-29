import React, { useState } from "react";
import styled from "styled-components";
import gwithtab from "../Image/gwithtab.png";
function Services() {
  const [cond, setCond] = useState(false);
  const howitwork = () => {
    cond ? setCond(false) : setCond(true);
  };
  const Services = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    /* background-color: rgb(158, 158, 158); */
  `;
  const Shape=styled.div`
clip-path: polygon(21% 0, 68.6% 0, 76% 100%, 28% 100%);
      background-color: rgb(158, 158, 158);
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
  `
  const LeftDiv = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: ${!cond?"flex-end":"center"};
  `;
  const RightDiv = styled.div`
    width: 50%;
    height: 90vh;
    display: flex;
    border-radius: 3px;
    flex-direction: column;
    justify-content: space-evenly;
  `;
  const Title = styled.h1`
    width: 90%;
    font-size: 6rem;
    font-family: "Sofia";
  `;
  const Para = styled.p`
    width: 95%;
    font-size: 2rem;
    font-family: monospace;
  `;
  const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 98%;
    height: 35%;
  `;
  const Boxes = styled.div`
    width: 27%;
    text-align: center;
    height: 60%;
    background-color: #d0d3d4;
    border-radius: 2px;
    box-shadow: 0 0 5px 1px;
    font-size: 1.3rem;
  `;
  const Button = styled.button`
    width: 28%;
    height: 5rem;
    background-color: #001a66;
    border-radius: 0.5rem;
    border: 0.5px solid black;
    font-size: 2.2rem;
    color: white;
    cursor: pointer;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    margin: auto;
  `;
    const Img = styled.img`
    height: 95%;
    width: 75%;
  `;
  const Video = styled.video`
    height: 60%;margin-right:5rem;
    width: 80%;
  `;
  return (
    <Services>
      <LeftDiv>
        `${!cond?<Img src={gwithtab}/>:
        <Video src="https://www.youtube.com/embed/l0EnioRt_fo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoPlay loop controls></Video>}`
        <Shape/>
      </LeftDiv>
      <RightDiv>
        <Title>Simple process to start</Title>
        <Para>
          Lorem ipsum, dolor sit amet consectetur. Recus nam necessitatibus
          vero, iste itaque, commodi reiciendis en eligen ducimus, repudiandae
          facilis laboriosam soluta harum repellat suscipit quas animi! Quidem
          pariatur, magnam fugiat sapiente quia dolor. Rerum, quo excepturi?
          Delectus dolores maxime officia odio deserunt perferendis, vitae harum
          adipisci laboriosam iste!
        </Para>
        <Box>
          <Boxes>
            <h1 style={{ textAlign: "center" }}>🔍</h1>
            <Para>Lorem ipsum dolor sit amet consectetur.</Para>
          </Boxes>
          <Boxes>
            <h1 style={{ textAlign: "center" }}>🔍</h1>
            <Para>Lorem ipsum dolor sit amet consectetur.</Para>
          </Boxes>
          <Boxes>
            <h1 style={{ textAlign: "center" }}>🔍</h1>
            <Para>Lorem ipsum dolor sit amet consectetur.</Para>
          </Boxes>
        </Box>
        <Button onClick={howitwork}>▶How it works</Button>
      </RightDiv>
    </Services>
  );
}

export default Services;
