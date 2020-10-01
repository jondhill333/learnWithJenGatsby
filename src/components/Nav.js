import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
// import Img from 'gatsby-image';
import LLetter from '../assets/L-Letter-v7.svg';
import JLetter from '../assets/J-Letter-v7.svg';

const NavStyles = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 55px auto;
    font-size: 1.1rem;
    font-weight: 100;
  div {
    margin-left: 10px;
    display: flex;
    flex-direction: row;
  }
  p {
    margin-left: 10px; 
  }
  img {
    height: 3.3rem;
    margin: 0px 5px;

    }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 5px;
    justify-content: center;
    padding: 0;
    text-align: center;
  }
  span{
    width: 98%;
    background-color: red;
    height: 2px;
    /* margin-top: 5px; */
    margin: 0 auto;
    grid-column: 1 / span 2;
  }
  .about {
    transform: translateX(20px);
  }
  .prices {
    transform: translateX(10px);
  }
  a {
   &[aria-current="page"] {
    text-decoration: underline var(--red);
    }
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
  @media(max-width: 500px) {
    grid-template-columns: 30% 70%;
    li {
      li {
      font-size: 0.6rem;
    }
    }
  }
`;



export default function Nav({ path }) {
    return (
    <NavStyles>
      <div className="infoSection">
      {
      path !== "/" && 
        <>
        <img src={LLetter} alt="el letter in style of driving l plate" />
        <img src={JLetter}  alt="J letter in style of driving l plate"/>
        <p>07904 863 418</p>
        </>
      }
            </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/importantInfo">Important Info</Link>
        </li>
        <li className="about">
          <Link to="/about">About Me</Link>
        </li>
        <li className="prices">
          <Link to="/prices">Prices</Link>
        </li>
        <li>
          <Link to="/instagram">Instagram</Link>
        </li>
      </ul>
      <span></span>
    </NavStyles>
    )
}