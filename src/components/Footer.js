import React from 'react';
import LLetter from '../assets/L-Letter-v7.svg';
import JLetter from '../assets/J-Letter-v7.svg';
import styled from 'styled-components';

 const FooterStyles = styled.footer`
  div {
    margin-left: 10px;
    display: flex;
    flex-direction: row;
  }
 `;


export default function Footer({ path }) {
  return (
    <FooterStyles>
      {
      path !== "/" && 
        <>
        <img src={LLetter} alt="el letter in style of driving l plate" />
        <img src={JLetter}  alt="J letter in style of driving l plate"/>
        <p>07904 863 418</p>
        </>
      }
      <p>&copy; Jon Hill {new Date().getFullYear()} </p>
    </FooterStyles>
  );
}