import React from 'react';
import '../../styles/Resume.css';


function Resume() {
    return (
        <div>
            <h1>Resume</h1>
            <h5 className='skillscontainer'>Front End Proficiences</h5>
                <ul className='skills'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                
                </ul>
                <br></br>
            <h5 className='skillscontainer'>Back End Proficiences</h5>
                <ul className='skills'>
                    <li>MySql</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>NodeJS</li>
                </ul>
        <a className="resume" href="https://docs.google.com/document/d/1AgIGAaQ4GNleDFWeI3a1lRmHjfAuSi7wtoFSiD3GNhc/edit">Click for resume</a>

    </div>
    )
}
export default Resume;