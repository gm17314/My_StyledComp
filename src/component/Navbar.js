import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "./Responsive";
function Navbar() {
  const [cond, setCond] = useState(false);
  const Nav = styled.div`
    width: 100%;
    /* background-image: linear-gradient(#e0e0eb, #f5e6ff,#f2e6ff); */
    background-color: whitesmoke;
    height: 7rem;
    color: black;
    font-size: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    ${mobile({
      position: "relative",
      padding: 0,
    })}
  `;
  const Logo = styled.div`
    width: 15%;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Sofia";
    font-size: 4rem;
  `;
  const NavMenu = styled.ul`
    width: 70%;
    height: 7rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding-right: 20rem;
    padding-bottom: 1rem;
    ${mobile({
      position: "absolute",
      top: "7rem",
      width: "100%",
      flexDirection: "column",
      height: "30rem",
      padding: "1rem",
      backgroundColor: "whitesmoke;",
      borderTop: "1px solid grey",
      borderBottom: "1px solid grey",
      letterSpacing: "1px",
     
    })}
  `;
  const Hamburger = styled.div`
    width: 5%;
    height: 7rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: none;
    ${mobile({
      display: "flex",
    })}
  `;
  const NavLink = styled.a`
    text-decoration: none;
    font-size: 2.5rem;
    cursor: pointer;
  `;
  const Button = styled.button`
    width: 17rem;
    height: 5rem;
    background-color: #404040;
    border-radius: 1rem;
    border: 0.5px solid black;
    font-size: 2.8rem;
    color: white;
    cursor: pointer;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 500;
  `;
  return (
    <Nav>
      <Logo>A&G</Logo>
      <NavMenu>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Sevices</NavLink>
        </li>
        <li>
          <NavLink>Pricing</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
      </NavMenu>
      <Hamburger onClick={()=>cond?setCond(false):setCond(true)}>
        {cond ? (
          <div>&#x2716;</div>
        ) : (
          <div style={{ fontSize: "5rem" }}>&#8801;</div>
        )}

      </Hamburger>
      <Button>Join Now</Button>
    </Nav>
  );
}

export default Navbar;
