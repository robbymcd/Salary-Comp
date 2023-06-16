import React, { useState, useRef } from 'react';
import plus from './plus.png';
import './Sidebar.css';
import chart from './chart.png';
import github from './github.png';
import x from './x.png';
import './OpenSidebar.css';
import './Select.css';

export default function Sidebar( { onFormSubmit } ) {
    const [isOpen, setIsOpen] = useState(true);
    const [isClosed, setIsClosed] = useState(false);

    const [city1, setCity1] = useState('0');
    const [city2, setCity2] = useState('0');

    const [salary1, setSalary1] = useState('');
    const [salary2, setSalary2] = useState('');


    const [error, setError] = useState(false);

    const selectRef1 = useRef(null);
    const selectRef2 = useRef(null);

    const formatSalary = (salary) => {
        salary = salary.replace(/[^0-9]/g, '');

        // Convert the salary to a number and format it with commas
        const formattedSalary = Number(salary).toLocaleString();

        // Add the '$' symbol
        return '$' + formattedSalary;
    }

    const openSidebar = () => {
        setIsOpen(true);
        setIsClosed(false);
    }

    const closeSidebar = () => {
        setIsOpen(false);
        setIsClosed(true);
    }

    const city1ChangeHandler = (event) => {
        setCity1(event.target.value)
    }

    const city2ChangeHandler = (event) => {
        setCity2(event.target.value);
    }


    const salary1ChangeHandler = (event) => {
        const inputValue = event.target.value;      
        const formattedValue = formatSalary(inputValue);
        const regex = /\d/;
      
        if (regex.test(formattedValue[formattedValue.length - 1])) {
          setSalary1(formattedValue);
        } else {
            setSalary1(formattedValue.slice(0, formattedValue.length - 1));
        }
      }
      

    const salary2ChangeHandler = (event) => {
        const inputValue = event.target.value;
        const formattedValue = formatSalary(inputValue);
        const regex = /\d/;
        if (regex.test(formattedValue[formattedValue.length - 1])) {
            setSalary2(formattedValue);
        } else {
            setSalary2(formattedValue.slice(0, formattedValue.length - 1));
        }
    }

    const refresh = () => {
        window.location.reload(false);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (city1 === '0' | city2 === '0' | salary1 === '' | salary2 === '') {
            setError(true);
            return;
        }
        setError(false);
        const formData = {
            cityCOL1: city1,
            cityCOL2: city2,
            cityName1: selectRef1.current.options[selectRef1.current.selectedIndex].text,
            cityName2: selectRef2.current.options[selectRef2.current.selectedIndex].text,
            salary1: salary1,
            salary2: salary2
        };
        onFormSubmit(formData);
    }

    const clearHandler = (event) => {
        event.preventDefault();
        setError(false);
        setCity1('0');
        setCity2('0');
        setSalary1('');
        setSalary2('');
    }

    return (
        <div className="sidebar">
            {isClosed && (
                <div className='closed-sidebar'>
                <img
                    className="plusIcon"
                    src={plus}
                    alt="plus"
                    onClick={openSidebar}
                />    
            </div>     
            )}
            {isOpen && (
                <div className='open-sidebar'>
                <div className='sidebar-header'>
                    <div className='logo' onClick={refresh}>
                        <img className='chart' src={chart} alt='Chart'></img>
                        <p>Salary Comp</p>
                    </div>
                    <img className='x' src={x} alt='x' onClick={closeSidebar}></img>
                </div>
                <form className='form' onSubmit={onFormSubmit}>
                    <h1>Job #1</h1>
                    <div className='city'>
                        <label>City</label>
                        <div className="select-main">
                            <select ref={selectRef1} value={city1} className='select-input' onChange={city1ChangeHandler}>
                                <option value='0'>Select a City</option>
                                <option value='89.1'>Abilene, TX</option>
                                <option value='90.5'>Adrian, MI</option>
                                <option value='89.4'>Akron, OH</option>
                                <option value='85.8'>Alamogordo, NM</option>
                                <option value='87.3'>Albany, GA</option>
                                <option value='105.4'>Albany, OR</option>
                                <option value='100.1'>Albany, NY</option>
                                <option value='90.9'>Albertville, AL</option>
                                <option value='92.9'>Albuquerque, NM</option>
                                <option value='86.2'>Alexandria, LA</option>
                                <option value='98.9'>Allentown, PA</option>
                                <option value='90.8'>Altoona, PA</option>
                                <option value='88.2'>Amarillo, TX</option>
                                <option value='91.5'>Ames, IA</option>
                                <option value='110.7'>Anchorage, AK</option>
                                <option value='99.3'>Ann Arbor, MI</option>
                                <option value='85.7'>Anniston, AL</option>
                                <option value='90.7'>Appleton, WI</option>
                                <option value='103.3'>Asheville, NC</option>
                                <option value='87.4'>Ashtabula, OH</option>
                                <option value='88.5'>Athens, OH</option>
                                <option value='92.9'>Athens, TX</option>
                                <option value='95'>Athens, GA</option>
                                <option value='100.3'>Atlanta, GA</option>
                                <option value='102'>Atlantic City, NJ</option>
                                <option value='93.7'>Auburn, NY</option>
                                <option value='91.9'>Auburn, AL</option>
                                <option value='91.6'>Augusta, GA</option>
                                <option value='100'>Augusta, ME</option>
                                <option value='106.6'>Austin, TX</option>
                                <option value='102.9'>Bakersfield, CA</option>
                                <option value='107'>Baltimore, MD</option>
                            </select>
                        </div>
                    </div>
                    <div className='salary'>
                        <label>Salary</label>
                        <input className='salary-input' type='text' placeholder='Enter Salary' onChange={salary1ChangeHandler} value={salary1}></input>
                    </div>
                    <h1>Job #2</h1>
                    <div className='city'>
                        <label>City</label>
                        <div className="select-main">
                            <select ref={selectRef2} value={city2} className='select-input' onChange={city2ChangeHandler}>
                                <option value='0'>Select a City</option>
                                <option value='89.1'>Abilene, TX</option>
                                <option value='90.5'>Adrian, MI</option>
                                <option value='89.4'>Akron, OH</option>
                                <option value='85.8'>Alamogordo, NM</option>
                                <option value='87.3'>Albany, GA</option>
                                <option value='105.4'>Albany, OR</option>
                                <option value='100.1'>Albany, NY</option>
                                <option value='90.9'>Albertville, AL</option>
                                <option value='92.9'>Albuquerque, NM</option>
                                <option value='86.2'>Alexandria, LA</option>
                                <option value='98.9'>Allentown, PA</option>
                                <option value='90.8'>Altoona, PA</option>
                                <option value='88.2'>Amarillo, TX</option>
                                <option value='91.5'>Ames, IA</option>
                                <option value='110.7'>Anchorage, AK</option>
                                <option value='99.3'>Ann Arbor, MI</option>
                                <option value='85.7'>Anniston, AL</option>
                                <option value='90.7'>Appleton, WI</option>
                                <option value='103.3'>Asheville, NC</option>
                                <option value='87.4'>Ashtabula, OH</option>
                                <option value='88.5'>Athens, OH</option>
                                <option value='92.9'>Athens, TX</option>
                                <option value='95'>Athens, GA</option>
                                <option value='100.3'>Atlanta, GA</option>
                                <option value='102'>Atlantic City, NJ</option>
                                <option value='93.7'>Auburn, NY</option>
                                <option value='91.9'>Auburn, AL</option>
                                <option value='91.6'>Augusta, GA</option>
                                <option value='100'>Augusta, ME</option>
                                <option value='106.6'>Austin, TX</option>
                                <option value='102.9'>Bakersfield, CA</option>
                                <option value='107'>Baltimore, MD</option>
                                <option value='98'>Bangor, ME</option>
                                <option value='122.4'>Barnstable Town, MA</option>
                            </select>
                        </div>
                    </div>
                    <div className='salary'>
                        <label>Salary</label>
                        <input className='salary-input' type='text' placeholder='Enter Salary' onChange={salary2ChangeHandler} value={salary2}></input>
                        {error && <p className='error'>Please fill out all fields</p>}
                    </div>
                    <div className='button-container'>
                        <div className='submit-container'>
                            <button className='submit' onClick={submitHandler} type='submit'>Submit</button>
                        </div>
                        <div className='clear-container'>
                            <button className='clear' onClick={clearHandler}>Clear</button>
                        </div>
                    </div>
                </form>
                <div className='footer'>
                    <div className='hiw'>
                        <p>Data From</p>
                        <a href='https://advisorsmith.com/data/coli' target='_blank' rel='noopener noreferrer'>AdvisorSmith Cost of Living Index</a>
                    </div>
                    <img className='github' src={github} alt='github' href='https://github.com/robbymcd/Salary-Comp'></img>
                    <p className='copyright'>Copyright © 2023 Salary Comp. All rights reserved.</p>
                </div>
            </div>
            )}
        </div>
    );
}
