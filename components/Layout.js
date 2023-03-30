import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import homeStyle from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={utilStyles.mainApp}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
