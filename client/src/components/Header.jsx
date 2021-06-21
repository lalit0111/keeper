import React from "react";
import image from "../images/download.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  const Button = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 2em;
    margin: 0.5rem 2rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-family: "Montserrat";

    &:hover {
      background: white;
      color: #1e90ff;
    }
  `;

  return (
    <header>
      <h1>Keeper</h1>
      <img src={image} alt="Avatar"></img>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
    </header>
  );
}

export default Header;
