import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';


export default function Layout({ children }) {
  return (
    <>
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
    </>
  );
}


