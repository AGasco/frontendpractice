import Head from '../../Main/Head/Head.component';
import Footer from '../../Main/Footer/Footer.component';

function HomeLayoutComponent({ children }) {
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

export default HomeLayoutComponent;
