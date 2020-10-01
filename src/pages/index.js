import React from 'react';
import styled from 'styled-components';
// import Logo from '../components/Logo.js';
import LogoSVG from '../assets/learnwithjenlogov2.svg';

const LogoStyles = styled.div`
    .container {
        width: 98vw;
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateX(10px);
    }
    img {
        transform: scale(4) translateX(5px) translateY(25%)  ;
    }
    @media(max-width: 1000px) {
        img {
            transform: scale(4) translateX(10px) translateY(25%) ;
        }
    }
    @media(max-width: 500px) {
        img {
            transform: scale(2) translateX(8px) translateY(15%) ;
        }
    }


`;



export default function HomePage(props) {
    console.log(props);
    return (
        <>
        <LogoStyles>
            <div className="container">
                <img src={LogoSVG}  alt="company logo" ></img>
            </div>
        </LogoStyles>
            {/* <Logo /> */}
        </>
    );
}
