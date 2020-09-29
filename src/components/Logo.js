import React from 'react';
import styled from 'styled-components';
import LLetter from '../assets/L-Letter-v7.svg';
import JLetter from '../assets/J-Letter-v7.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: clamp(1px, 0.65vw, 8px);
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
      letter-spacing: 8px;
  }
  .word {
    margin: 0px 15px;
  }
  &.jen {
    margin-right: none;
  }
  span {
      font-size: 6rem;
      font-weight: 900;
  }
  img {
    height: 7rem;
    margin: 0px 5px;
    transform: translateY(1.5rem);
  }
  /* .l .j {
      margin: 5px;
  } */
  .plate {
      color: var(--red);
  }
  .letter {
    display: inline-block;
  }
  .e {
    transform: translateY(-4rem); 
  }
  .a {
    transform: translateY(-6rem); 
  }
  .r{
    transform: translateY(-6rem); 
  }
  .n {
    transform: translateY(-8rem); 
  }
  .w {
    transform: translateY(-10rem); 
  }
  .i {
    transform: translateY(-9rem); 
  }
  .t {
    transform: translateY(-8rem); 
  }
  .h {
    transform: translateY(-7rem); 
  }
`;

export default function Logo() {
    return (
        <LogoStyles className="logo">
            <h1>
                <span className="word learn">
                    <img src={LLetter} alt="el letter in style of driving l plate" />   
                    <span className="letter e">e</span>
                    <span className="letter a">a</span>
                    <span className="letter r">r</span>
                    <span className="letter n">n</span>
                </span>
                <span className="word with">
                    <span className="letter w">w</span>
                    <span className="letter i">i</span>
                    <span className="letter t">t</span>
                    <span className="letter h">h</span>
                </span>
                <span className="word jen">
                <img src={JLetter}  alt="J letter in style of driving l plate"/>
                    <span className="letter e2">e</span>
                    <span className="letter n2">n</span>
                </span>
            </h1>
        </LogoStyles>
    );
  }