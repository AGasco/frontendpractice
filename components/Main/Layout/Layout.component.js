import Head from '../Head/Head.component';
import Navbar from '../Navbar/Navbar.component';
import Footer from '../Footer/Footer.component';

function HomeLayoutComponent({ children }) {
  return (
    <>
      {/* TODO: Add Navbar and Footer components */}
      <Head />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default HomeLayoutComponent;
