//importing all of the images 
import React from 'react';
import coupledining from '../Images/coupledining.jpeg';
import notepad from '../Images/notepad.jpeg';
import companyteam from '../Images/companyteam.jpeg';
import quiz from '../Images/quiz.jpeg';
import readme from '../Images/readme.jpeg';
import ecomm from '../Images/ecomm.jpeg';
import '../../styles/Portfolio.css';


function Portfolio() {
    return (
    <div>
    <h1>My Portfolio</h1>
            <div className='date'>
            <img src={coupledining} alt= 'couple dining'/>
            <button type="button" className='dinner' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/code587/Urban-Disco-Burrito';}}> Create a Date</button>
            </div>

            <div className='note'>
            <img src={notepad} alt= "notepad"/>
            <button type="button" className='journal' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/code587/NoteforNoteTaker';}}> Note Taker</button>
            </div>
            

            <div className='workTeam'>
            <img src={companyteam} alt= "silouhette of work team"/>
            <button type="button" className='team' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/code587/WorkSquad-ProfileGenerator';}}> Team Genrator</button>
            </div>

            <div className='quiz'>
            <img src={quiz} alt= "supernatural actors"/>
            <button type="button" className='spnquiz' onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/code587/Quiz-supernatural-challenge';}}> Quiz</button>
            </div>

            <div className='ecommerce'>
            <img src={ecomm} alt= "shopping basket on phone"/>
            <button type="button" className='commdb' onClick={(e) => {e.preventDefault(); window.location.href='https://https://github.com/code587/EComm-Merchandise-Database';}}> Ecomm db</button>
            </div>

            <div className='generator'>
            <img src={readme} alt= "readme generator text"/>
            <button type="button" className='readgenerator' onClick={(e) => {e.preventDefault(); window.location.href='https://https://github.com/code587/https://github.com/code587/README-generator';}}> Readme generator</button>
            </div>
    </div>
    )

}
export default Portfolio;