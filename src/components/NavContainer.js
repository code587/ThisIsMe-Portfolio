import React, { useState } from 'react';
import NavTabs from './pages/NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function NavContainer() {
    const [currentPage, setCurrentPage] = useState('');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      else if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      else if (currentPage === 'Contact') {
        return <Contact />;
      }
      else if (currentPage === 'Resume') {
        return <Resume />;
      }
      // return <AboutMe />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
    console.log({currentPage});
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
  
