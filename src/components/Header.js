import React from 'react';
import '../styles/Header.css';

const styles = {
    headingStyle: {
      fontSize: '40px',
    },
  };
  
  function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Stephanie Sanders</h1>
        <h2>Nice to meet you. THIS IS ME!</h2>
      </header>
    );
  }
  
  export default Header;
  