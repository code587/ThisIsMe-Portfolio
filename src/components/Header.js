import React from 'react';
import '../styles/Header.css';
import profilePic from '../components/Images/profile-pic.jpeg';

const styles = {
    headingStyle: {
      fontSize: '40px',
    },
  };
  
  function Header() {
    return (
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Stephanie Sanders</h1>
        <img className="pic" src={profilePic} alt= 'profile avatar'/>
        <h3>Nice to meet you. THIS IS ME!</h3>
      </header>
    );
  }
  
  export default Header;
  