import React from 'react';
import Footer from '../Footer/Footer.component';

function LayoutComponent({ children }) {
  return (
    <>
      {/* TODO: Add Navbar and Footer components */}
      <div className="navbar" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default LayoutComponent;
