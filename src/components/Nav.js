import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import LLetter from '../assets/L-Letter-v7.svg';
import JLetter from '../assets/J-Letter-v7.svg';

const NavStyles = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 55px auto;
    font-size: 1.1rem;
    font-weight: 100;
    margin-top: 2px;
    align-items: center;

  .infoSection {
    margin-left: 10px;
    display: flex;
    flex-direction: row;

    /* margin-bottom: 10px; */
  }
  .contactGroup {
    display: flex;
    flex-direction: column;
    padding-top: 3px;
    font-size: 1rem;
    
  }
  .contact {
    margin: 1px 0px 1px 10px;
  }
  img {
    height: 3rem;
    margin: 0px 5px;

  }
  ul {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 5px;
    justify-content: center;
    padding: 0;
    text-align: center;
  }
  li {
    margin-right: 2rem;
    position: relative;
  }

  .bottomBorder{
    width: 98%;
    background-color: red;
    height: 2px;
    margin: 0 auto;
    grid-column: 1 / span 2;
  }

  a {
   &[aria-current="page"]::after {
    width: 100%;
    bottom: 0;
    height: 2px; 
    margin: 3px auto;
    background: var(--red);
    content: "";
    display: block;
    opacity: 1;
    }
  }

  a:after {
    width: 0%;
    height: 2px; 
    margin: 3px auto;
    background: var(--red);
    content: "";
    display: block;
    opacity: 1;
    transition: width .3s ease-in-out; 
    right: 0;
  }
  a:hover:after {
     width: 100%;
     background: var(--red);
     left: 0;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    div {
      display: none;
    }
    ul {
      margin-left: 30px;
    }
    li {
      font-size: 0.8rem;
      margin-right: 1rem;
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
          <div className="contactGroup">
            <span className="contact phone">07904 863 418</span>
            <span className="contact email">jen@learnwithjen.co.uk</span>
          </div>
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
      <div className="bottomBorder"></div>
    </NavStyles>
    )
}