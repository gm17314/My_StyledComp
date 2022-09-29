import "./App.css";
import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Features from "./component/Features";
import Services from "./component/Services";
import Price from "./component/Price";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
// import styled from 'styled-components';
function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <Features/>
      <Services/>
      <Price/>
      <Contact/>
      <Footer/>
    </>
  );
}
export default App;
