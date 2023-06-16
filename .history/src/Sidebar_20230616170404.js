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

    const openGithub = () => {
        window.open('https://github.com/robbymcd/Salary-Comp');
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
                                <option value='91.1'>Baton Rouge, LA</option>
                                <option value='85.9'>Battle Creek, MI</option>
                                <option value='85.4'>Bay City, MI</option>
                                <option value='88.6'>Beaumount, TX</option>
                                <option value='92.9'>Beaver Dam, WI</option>
                                <option value='80'>Beckley, WV</option>
                                <option value='111.6'>Bellingham, WA</option>
                                <option value='115.9'>Bend, OR</option>
                                <option value='95.7'>Billings, MT</option>
                                <option value='93.3'>Binghamton, NY</option>
                                <option value='90.7'>Birmingham, AL</option>
                                <option value='93.1'>Bismarck, ND</option>
                                <option value='94.5'>Blacksburg, VA</option>
                                <option value='92.4'>Bloomington, IN</option>
                                <option value='93.2'>Bloomsburg, PA</option>
                                <option value='81.2'>Bluefield, WV</option>
                                <option value='100.3'>Boise City, ID</option>
                                <option value='132.6'>Boston, MA</option>
                                <option value='118.7'> Boulder, CO</option>
                                <option value='87'>Bowling Green, KY</option>
                                <option value='125.3'>Bozeman, MT</option>
                                <option value='97.9'>Brainerd, MN</option>
                                <option value='89.5'>Branson, MO</option>
                                <option value='115'>Bremerton, WA</option>
                                <option value='87.8'>Brownsville, TX</option>
                                <option value='94.4'>Brunswick, GA</option>
                                <option value='97.3'>Buffalo, NY</option>
                                <option value='91.8'>Burlington, NC</option>
                                <option value='112.8'>Burlington, VT</option>
                                <option value='88.2'>Canton, OH</option>
                                <option value='88.1'>Cape Girardeau, MO</option>
                                <option value='83.5'>Carbondale, IL</option>
                                <option value='103'>Carson City, NV</option>
                                <option value='94.2'>Casper, WY</option>
                                <option value='88.1'>Cedar Rapids, IA</option>
                                <option value='103.3'>Centralia, WA</option>
                                <option value='95.7'>Chambersburg, PA</option>
                                <option value='89'>Champaign, IL</option>
                                <option value='83.9'>Charleston, WV</option>
                                <option value='101.7'>Charleston, SC</option>
                                <option value='97.9'>Charlotte, NC</option>
                                <option value='102.1'>Charlottesville, VA</option>
                                <option value='91.2'>Chattanooga, TN</option>
                                <option value='96.9'>Cheyenne, WY</option>
                                <option value='100.1'>Chicago, IL</option>
                                <option value='110.5'>Chico, CA</option>
                                <option value='89.8'>Chillicothe, OH</option>
                                <option value='92.4'>Cincinnati, OH</option>
                                <option value='102.3'>Claremont, NH</option>
                                <option value='83.4'>Clarksburg, WV</option>
                                <option value='88.7'>Clarksville, TN</option>
                                <option value='108.8'>Clearlake, CA</option>
                                <option value='89.5'>Cleveland, TN</option>
                                <option value='90'>Cleveland, OH</option>
                                <option value='103.3'>Coeur d'Alene, ID</option>
                                <option value='92.3'>College Station, TX</option>
                                <option value='102.2'>Colorado Springs, CO</option>
                                <option value='89.8'>Columbia, MO</option>
                                <option value='91.9'>Columbia, SC</option>
                                <option value='88.5'>Columbus, GA</option>
                                <option value='89.1'>Columbus, IN</option>
                                <option value='93.9'>Columbus, OH</option>
                                <option value='108.3'>Concord, NH</option>
                                <option value='90.9'>Cookeville, TN</option>
                                <option value='102'>Coos Bay, OR</option>
                                <option value='90.9'>Corning, NY</option>
                                <option value='102'>Coos Bay, OR</option>
                                <option value='90.9'>Corning, NY</option>
                                <option value='93.3'>Corpus Christi, TX</option>
                                <option value='110.6'>Corvallis, OR</option>
                                <option value='90.5'>Cullman, AL</option>
                                <option value='90.9'>Cumbermand, MD</option>
                                <option value='89.1'>Dalton, GA</option>
                                <option value='83.9'>Danville, IL</option>
                                <option value='87.1'>Danville, VA</option>
                                <option value='88.4'>Dayton, OH</option>
                                <option value='88.6'>Decatur, AL</option>
                                <option value='84.9'>Decatur, IL</option>
                                <option value='112.1'>Denver, CO</option>
                                <option value='91.7'>Des Moines, IA</option>
                                <option value='93.2'>Detroit, MI</option>
                                <option value='86.3'>Dothan, AL</option>
                                <option value='101.3'>Dover, DE</option>
                                <option value='88.2'>DuBois, PA</option>
                                <option value='89.6'>Dubuque, IA</option>
                                <option value='93.2'>Duluth, MN</option>
                                <option value='91.4'>Dunn, NC</option>
                                <option value='99.8'>Durham, NC</option>
                                <option value='96.1'>East Stroudsburg, PA</option>
                                <option value='91.8'>Eau Claire, WI</option>
                                <option value='102.3'>El Centro, CA</option>
                                <option value='88.6'>El Pase, TX</option>
                                <option value='91.1'>Elizabeth City</option>
                                <option value='88.1'>Elizabethtown, KY</option>
                                <option value='88.5'>Elkhart, IN</option>
                                <option value='92.5'>Elmira, NY</option>
                                <option value='82.9'>Enid, OK</option>
                                <option value='91.8'>Erie, PA</option>
                                <option value='108.4'>Eugene, OR</option>
                                <option value='116.5'>Eureka, CA</option>
                                <option value='87.2'>Evansville, IN</option>
                                <option value='107.9'>Fairbanks, AK</option>
                                <option value='91.4'>Fargo, ND</option>
                                <option value='102.3'>Faribault, MN</option>
                                <option value='85.4'>Farmington, MO</option>
                                <option value='88.4'>Farmington, NM</option>
                                <option value='89.5'>Fayetteville, NC</option>
                                <option value='90.4'>Fayetteville, AR</option>
                                <option value='91.1'>Findlay, OH</option>
                                <option value='108.5'>Flagstaff, AZ</option>
                                <option value='85.7'>Flint, MI</option>
                                <option value='87.7'>Florence, SC</option>  
                                <option value='86.8'>Florence, AL</option>
                                <option value='88'>Fond du Lac, WI</option>
                                <option value='89.4'>Forest City, NC</option>
                                <option value='109.2'>Fort Collins, CO</option>
                                <option value='84.2'>Fort Smith, AR</option>
                                <option value='86.8'>Fort Wayne, IN</option>
                                <option value='88.1'>Frankfort, KY</option>
                                <option value='105.9'>Fresno, CA</option>
                                <option value='86'>Gadsden, AL</option>
                                <option value='97.3'>Gainesville, FL</option>
                                <option value='97'>Gainesville, GA</option>
                                <option value='90'>Gallup, NM</option>
                                <option value='98.2'>Gettysburg, PA</option>
                                <option value='98.6'>Glens Falls, NY</option>
                                <option value='88.5'>Goldsboro, NC</option>
                                <option value='90.7'>Grand Forks, NC</option>
                                <option value='88.8'>Grand Island, NE</option>
                                <option value='98.1'>Grand Junction, CO</option>
                                <option value='93.7'>Grand Rapids, MI</option>
                                <option value='106.6'>Grants Pass, OR</option>
                                <option value='91.1'>Great Falls, MT</option>
                                <option value='106.1'>Greeley, CO</option>
                                <option value='91.4'>Green Bay, WI</option>
                                <option value='86.5'>Greenville, TN</option>
                                <option value='91'>Greensboro, NC</option>
                                <option value='89.8'>Greenville, NC</option>
                                <option value='95'>Greenville, SC</option>
                                <option value='88.7'>Greenwood, SC</option>
                                <option value='86.8'>Gulfport, MS</option>
                                <option value='89'>Hammond, LA</option>
                                <option value='105.4'>Hanford, CA</option>
                                <option value='95.8'>Harrisburg, PA</option>
                                <option value='95.5'>Harrisonburg, VA</option>
                                <option value='104.8'>Hartford, CT</option>
                                <option value='86.1'>Hattiesburg, MS</option>
                                <option value='104.2'>Helena, MT</option>
                                <option value='89.8'>Hickory, NC</option> 
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
                    <img className='github' src={github} alt='github' onClick={openGithub}></img>
                    <p className='copyright'>Copyright © 2023 Salary Comp. All rights reserved.</p>
                </div>
            </div>
            )}
        </div>
    );
}
