import React from 'react';
import '../../styles/Section.css';

//allows for styling on one page if wanted
const styles = {
    sectionStyles: {
      fontSize: '20px',
    },
  };

  function Section() {
    return (
    <section style={styles.sectionStyles} className="section">
        <h1 className='me'>About Me</h1>
        <div class="block">
          I am a full stack web developer.  I am proficient with HTML CSS, Javascript, jQuery, and Bootstrap to name a few. You may see my projects by clicking on the Projects button above or scrolling down..
        </div>
        <div class="block">
          My previous experience in project management will tie in well with my career as a programmer and coder. 
        </div>
        <div class="block">
        Thank you for taking the time to review my portfolio. I am excited about being a competent and contributing team player. I hope to have the opportunity to discuss my examples in greater detail with you and confirm you are right. I am the person for the job! I look forward to speaking with you and answering any questions you may have.
        </div>

    </section>
  );
}

export default Section;