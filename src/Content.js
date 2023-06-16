import React from 'react';
import './Content.css';
import Instruction from './Instruction.js';
import Main from './Main.js';

export default function Content({ isSubmitted ,cityCOL1 ,cityCOL2, cityName1, cityName2 , salary1, salary2 }) {

    return (
        <div className='Content-container'>
            {isSubmitted ? <Main cityCOL1={cityCOL1} cityCOL2={cityCOL2} cityName1={cityName1} cityName2={cityName2} salary1={salary1} salary2={salary2}/> : <Instruction />}
        </div>
    );
}