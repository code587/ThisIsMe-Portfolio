import React, { useState } from 'react';
import coupledining from '../components/Images/coupledining.jpeg';
import notepad from '../components/Images/notepad.jpeg';
import companyteam from '../components/Images/companyteam.jpeg';
import '../styles/Portfolio.css';


function Portfolio() {
    return (
    <div>
    <h1>My Projects</h1>
        <div className='project1'>
            <img src={coupledining} alt= 'couple dining'/>
            <a id='gitlink1' href='https://github.com/code587/Urban-Disco-Burrito'>
            </a>
        </div>
        <div className='project2'>
        <img src={notepad} alt= "note pad"/>
        <a id="gitlink2" href="https://github.com/code587/NoteforNoteTaker"></a>
        </div>
        <div className='project3'>
        <img src={companyteam} alt= "silouhette of work team"/>
        <a id="gitlink2" href="https://github.com/code587/WorkSquad-ProfileGenerator"></a>
        </div>
    </div>
    )

}
export default Portfolio;