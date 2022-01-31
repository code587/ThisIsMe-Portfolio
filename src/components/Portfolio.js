import React, { useState } from 'react';
import coupledining from '../components/Images/coupledining.jpeg';
import notepad from '../components/Images/notepad.jpeg';
import companyteam from '../components/Images/companyteam.jpeg';
import quiz from '../components/Images/quiz.jpeg';
import '../styles/Portfolio.css';


function Portfolio() {
    return (
    <div>
    <h1>Portfolio</h1>
        <div className='date'>
            <img src={coupledining} alt= 'couple dining' />
            <a className='gitlink1' href='https://github.com/code587/Urban-Disco-Burrito'> 
            </a>
        </div>
        <div className='notes'>
        <img src={notepad} alt= "note pad"/>
        <button className='btn'>Button</button>
        <a className="gitlink2" href="https://github.com/code587/NoteforNoteTaker"></a>
        </div>

        <div className='workTeam'>
        <img src={companyteam} alt= "silouhette of work team"/>
        <a className="gitlink3" href="https://github.com/code587/WorkSquad-ProfileGenerator"></a>
        </div>
        <div className='quiz'>
        <img src={quiz} alt= "supernatural actors"/>
        <a className="gitlink4" href="https://github.com/code587/Quiz-supernatural-challenge"></a>
        </div>
    </div>
    )

}
export default Portfolio;