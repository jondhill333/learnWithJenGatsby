import React from 'react';
import LLetter from '../assets/L-Letter-v7.svg';
import JLetter from '../assets/J-Letter-v7.svg';
import styled from 'styled-components';
// import { Responsive } from 'react-responsive';

 const FooterStyles = styled.footer`
    display: flex;
    flex-direction: row;
    position: fixed;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
  div {
      display: none;
    }
  img {
    height: 3.3rem;
    margin: 0px 5px;
  }
  p {
    display: flex;
    margin-left: 10px; 
    justify-items: flex-end;
  }

  @media(max-width: 400px) {
    border-top: 2px solid red;
    margin-right: 20px;
    background: var(--black);
    div {
      display: flex;
      align-items: center;
      margin: 5px 0;

    }
    img {
    height: 2.5rem;
    margin: 0px 5px;
  }
  }
`;


export default function Footer({ path }) {
  return (

      <FooterStyles>
        {path !== "/" && 
        <div>
          <img src={LLetter} alt="el letter in style of driving l plate" />
          <img src={JLetter}  alt="J letter in style of driving l plate"/>
          <p>07904 863 418</p>
          <p>jen@learnwithjen.co.uk</p>
        </div>
        }
        {/* <p>&copy; Jon Hill {new Date().getFullYear()} </p> */}
      </FooterStyles>
  );
}