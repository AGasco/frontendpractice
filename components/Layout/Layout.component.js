import React from 'react';
import Head from '../Head/Head.component';
import Footer from '../Footer/Footer.component';

function LayoutComponent({ children }) {
  return (
    <>
      {/* TODO: Add Navbar and Footer components */}
      <Head />
      <div className="navbar" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default LayoutComponent;
