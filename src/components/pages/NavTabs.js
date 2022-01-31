import React from 'react';

const styles = {
  navbarStyle: {
    justifyContent: 'center',
  },
};

function NavTabs({ currentPage, handlePageChange }) {
    return (
      <nav style={styles.navbarStyle} className="navbar">
      <ul className='nav nav-tabs' style={{display: 'flex', alignItems:'center'}}>
        <li className='nav-item'>
          <a
            href='#aboutMe'
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            AboutMe
          </a>
        </li>
        <li className='nav-item'>
          <a
            href='#portfolio'
            onClick={(e) => {e.preventDefault();handlePageChange('Portfolio')}}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className='nav-item'>
          <a
            href='#contact'
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className='nav-item'>
          <a
            href='#resume'
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
      </nav>
    );
  }
  
  export default NavTabs;
  