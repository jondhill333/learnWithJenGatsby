import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    font-size: 1.2rem;
    font-weight: 100;
    border: solid 1px red;
  div {

  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    padding: 0;
    text-align: center;
  }
  @media(max-width: 1100px) {
    grid-template-columns: 40% 60%;
    ul {
      margin-right: 20px;
    }
    li {
      font-size: 0.8rem;
    }
  }
`;



export default function Nav() {
    return (
    <NavStyles>
      <div>Phone number placeholder</div>
      <ul>
        <li>
          <Link to="/importantInfo">Important Info</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/prices">Prices</Link>
        </li>
        <li>
          <Link to="/instagram">Instagram</Link>
        </li>
      </ul>
    </NavStyles>
    )
}