import React from 'react'
import styled from 'styled-components'
import contact from "../Image/contact.png";
function Contact() {
    const Contact=styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    `
    const RightDiv = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;
    const Title = styled.h4`
    font-size: 5rem;
    width: 85%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;
    const InputField=styled.div`
    display: flex;
    justify-content: space-between;
    width: 85%;
    height: 40vh;
    `
    const Details=styled.div`
    display: flex;
    flex-direction: column;justify-content:space-between;
    width: 45%;
    height: 100%;
    `
    const Input=styled.input`
    width: 100%;
    height: 25%;
    border-radius: 3px;
    padding-left: 1rem;
    font-size: 2rem;
    `
     const Message=styled.div`
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     width: 50%;
     height: 100%;
     `
    const TextField=styled.textarea`
    width: 100%;
    height:70%;
    border:2px solid grey;
    border-radius: 3px;
    padding: 1rem;
    font-size: 2rem;
    `
    const Button = styled.button`
    width: 100%;
    height: 20%;
    background-color: #001a66;
    border-radius: 1rem;
    font-size: 2.7rem;
    color: white;
    cursor: pointer;
    font-weight: 100;
    /* margin: auto; */
  `;

    const LeftDiv = styled.div`
      width: 50%;
      height: 100vh;
      display: flex;
      border-radius: 3px;
      flex-direction: column;
      justify-content: space-evenly;
      background-image: url("../Image/contact.jpg") no-repeat cover;
    `;
    const Shape = styled.div`
    clip-path: polygon(0 0, 25.2% 0, 70% 100%, 0% 100%);
     background-color: #1a1a1a;
     height: 100%;
     width: 100%;
     position: absolute;
     z-index: -1;
   `;
  return (
<Contact>
    <LeftDiv>
        <img src={contact} height={"100%"} alt="" />
        <Shape></Shape>
    </LeftDiv>
    <RightDiv>
    <Title>Ask 🤔<br />Questions? <br /> Let's Get In Touch</Title>
        <InputField>
            <Details>
                <Input type="text" placeholder='Your Name'/>
                <Input type="text" placeholder='Your Email'/>
                <Input type="text" placeholder='Subject'/>
            </Details>
            <Message>
                <TextField placeholder='Type Your Message...'/>
                <Button>Send</Button>
            </Message>
        </InputField>
    </RightDiv>
</Contact>
  )
}

export default Contact
