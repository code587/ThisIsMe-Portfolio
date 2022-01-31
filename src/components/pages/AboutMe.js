import React from 'react';
import '../../styles/Section.css';
  
const styles = {
    sectionStyles: {
      fontSize: '20px',
    },
  };

  function Section() {
    return (
    <section style={styles.sectionStyles} className="section">
        <h2>About Me</h2>
        <p>
            I am working to become a full stack web developer.  Gaining familiarity with CSS, Javascript, jQuery, and Bootstrap. You may see my projects by clicking on the Projects button above or scrolling down.
        </p>
        <br></br>
        <p>
            My previous experience in project management will tie in well with my career as a programmer and coder. 
        </p>
        <br></br>
        <p>
            Thank you for taking the time to review my portfolio. I am excited about being a competent and contributing team player. I hope to have the opportunity to discuss my examples in greater detail with you and confirm you are right. I am the person for the job! I look forward to speaking with you and answering any questions you may have.
        </p>
    </section>
  );
}

export default Section;