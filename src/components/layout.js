import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';


export default function Layout({ path, children, pageContext }) {
  pageContext = {
    isMobile: true,
  }
  return (
    <>
    <GlobalStyles />
    <Nav path={path}/>
    {children}
    <Footer path={path} />
    </>
  );
}


