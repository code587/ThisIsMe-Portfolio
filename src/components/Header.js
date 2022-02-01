import React from 'react';
import '../styles/Header.css';
import profilePic from '../Images/profile-pic.jpeg';

const styles = {
    headingStyle: {
      fontSize: '40px',
    },
  };
  
  function Header() {
    return (
    <header style={styles.headerStyle} className="header">
        <div className='picContainer'>
          <img className="pic" src={profilePic} alt= 'profile avatar'/>
          <h1 style={styles.headingStyle}>I am Stephanie Sanders~</h1>
        <h3>Nice to meet you.</h3>
        </div>
    </header>
    );
  }
  
  export default Header;
  