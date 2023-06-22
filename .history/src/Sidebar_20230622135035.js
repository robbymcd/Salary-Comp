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

    const [city1Label, setCity1Label] = useState('Select a City');
    const [city2Label, setCity2Label] = useState('Select a City');

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
        setCity1Label(event.target.label)
    }

    const city2ChangeHandler = (event) => {
        setCity2(event.target.value);
        setCity2Label(event.target.label);
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
                            <select ref={selectRef1} value={} className='select-input' onChange={city1ChangeHandler}>
                                <option value='0' label='Select a City'>Select a City</option>
                                <option value='89.1' label='Abilene, TX'>Abilene, TX</option>
                                <option value='90.5' label='Adrian, MI'>Adrian, MI</option>
                                <option value='89.4' label='Akron, OH'>Akron, OH</option>
                                <option value='85.8' label='Alamogordo, NM'>Alamogordo, NM</option>
                                <option value='87.3' label='Albany, GA'>Albany, GA</option>
                                <option value='105.4' label='Albany, OR'>Albany, OR</option>
                                <option value='100.1' label=''>Albany, NY</option>
                                <option value='90.9' label=''>Albertville, AL</option>
                                <option value='92.9' label=''>Albuquerque, NM</option>
                                <option value='86.2' label=''>Alexandria, LA</option>
                                <option value='98.9' label=''>Allentown, PA</option>
                                <option value='90.8' label=''>Altoona, PA</option>
                                <option value='88.2' label=''>Amarillo, TX</option>
                                <option value='91.5' label=''>Ames, IA</option>
                                <option value='110.7' label=''>Anchorage, AK</option>
                                <option value='99.3' label=''>Ann Arbor, MI</option>
                                <option value='85.7' label=''>Anniston, AL</option>
                                <option value='90.7' label=''>Appleton, WI</option>
                                <option value='103.3' label=''>Asheville, NC</option>
                                <option value='87.4' label=''>Ashtabula, OH</option>
                                <option value='88.5' label=''>Athens, OH</option>
                                <option value='92.9' label=''>Athens, TX</option>
                                <option value='95' label=''>Athens, GA</option>
                                <option value='100.3' label=''>Atlanta, GA</option>
                                <option value='102' label=''>Atlantic City, NJ</option>
                                <option value='93.7' label=''>Auburn, NY</option>
                                <option value='91.9' label=''>Auburn, AL</option>
                                <option value='91.6' label=''>Augusta, GA</option>
                                <option value='100' label=''>Augusta, ME</option>
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
                                <option value='89.5' label='Branson, MO'>Branson, MO</option>
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
                                <option value='136.9'>Hilo, HI</option>
                                <option value='109.4'>Hilton Head Island</option>
                                <option value='90.8'>Hinesville, GA</option>
                                <option value='87.7'>Hobbs, NM</option>
                                <option value='95.5'>Homosassa Springs, FL</option>
                                <option value='87.3'>Hot Springs, AR</option>
                                <option value='89.9'>Houma, LA</option>
                                <option value='95.8'>Houston, TX</option>
                                <option value='84.3'>Huntington, WV</option>
                                <option value='91.3'>Huntsville, AL</option>
                                <option value='91.2'>Huntsville, TX</option>
                                <option value='84'>Hutchinson, KS</option>
                                <option value='91.7'>Idaho Falls, ID</option>
                                <option value='90.8'>Indiana, PA</option>
                                <option value='90.2'>Indianapolis, IN</option>
                                <option value='93.5'>Iowa City, IA</option>
                                <option value='101.7'>Ithaca, NY</option>
                                <option value='87.4'>Jackson, MI</option>
                                <option value='87.8'>Jackson, MS</option>
                                <option value='85.2'>Jackson, TN</option>
                                <option value='99'>Jacksonville, FL</option>
                                <option value='91.7'>Jacksonville, NC</option>
                                <option value='91.3'>Jamestown, NY</option>
                                <option value='89.8'>Janesville, WI</option>
                                <option value='86.3'>Jefferson City, MO</option>
                                <option value='88.1'>Johnson City, TN</option>
                                <option value='87.6'>Johnstown, PA</option>
                                <option value='85.2'>Jonesboro, AR</option>
                                <option value='158.5'>Kahului, HI</option>
                                <option value='89.3'>Kalamazoo, MI</option>
                                <option value='112.7'>Kalispell, MT</option>
                                <option value='91'>Kankakee, IL</option>
                                <option value='91.6'>Kansas City, MO</option>
                                <option value='164.9'>Kapaa, HI</option>
                                <option value='102.1'>Keene, NH</option>
                                <option value='99.7'>Kennewick, WA</option>
                                <option value='140'>Key West, FL</option>
                                <option value='88.6'>Kileen, TX</option>
                                <option value='86'>Kingsport, TN</option>
                                <option value='106.1'>Kingston, NY</option>
                                <option value='97.1'>Klamath Falls, OR</option>
                                <option value='91.6'>Knoxville, TN</option>
                                <option value='84.9'>Kokomo, IN</option>
                                <option value='91.8'>La Crosse, WI</option>
                                <option value='89.6'>Lafayette, LA</option>
                                <option value='86'>LaGrange, GA</option>
                                <option value='89.4'>Lake Charles, LA</option>
                                <option value='93.6'>Lake City, FL</option>
                                <option value='98.4'>Lake Havasu City, AZ</option>
                                <option value='96.4'>Lakeland, FL</option>
                                <option value='99.5'>Lancaster, PA</option>
                                <option value='88.7'>Lansing, MI</option>
                                <option value='90.1'>Laredo, TX</option>
                                <option value='88.8'>Las Cruces, NM</option>
                                <option value='100.7'>Las Vegas, NV</option>
                                <option value='85.9'>Laurel, MS</option>
                                <option value='91.6'>Lawrence, KS</option>
                                <option value='82.8'>Lawton, OK</option>
                                <option value='95.4'>Lebanon, PA</option>
                                <option value='92.5'>Lewiston, ID</option>
                                <option value='99.7'>Lewiston, ME</option>
                                <option value='91.1'>Lexington, KY</option>
                                <option value='87.2'>Lima, OH</option>
                                <option value='94.7'>Lincoln, NE</option>
                                <option value='88'>Little Rock, AR</option>
                                <option value='84.6'>London, KY</option>
                                <option value='88.5'>Longview, TX</option>
                                <option value='101.6'>Longview, WA</option>
                                <option value='88.8'>Lubbock, TX</option>
                                <option value='88.2'>Lufkin, TX</option>
                                <option value='83.4'>Lumberton, NC</option>
                                <option value='93.6'>Lynchburg, VA</option>
                                <option value='87.2'>Macon, GA</option>
                                <option value='108.9'>Madera, CA</option>
                                <option value='99.5'>Madison, WI</option>
                                <option value='109.6'>Manchester, NH</option>
                                <option value='89.6'>Manhattan, KS</option>
                                <option value='87.8'>Manitowoc, WI</option>
                                <option value='95.3'>Makato, MN</option>
                                <option value='86.2'>Mansfield, OH</option>
                                <option value='86.6'>Marinette, WI</option>
                                <option value='81.8'>Marion, IN</option>
                                <option value='85.7'>Marion, OH</option>
                                <option value='91.3'>Marquette, MI</option>
                                <option value='89.9'>Marshall, TX</option>
                                <option value='85'>Martinsville, VA</option>
                                <option value='86'>McAllen, TX</option>
                                <option value='88.5'>Meadville, PA</option>
                                <option value='107.5'>Medford, OR</option>
                                <option value='88.2'>Memphis, TN</option>
                                <option value='108.2'>Merced, CA</option>
                                <option value='82'>Meridian, MS</option>
                                <option value='87.8'>Michigan City, IN</option>
                                <option value='87'>Midland, MI</option>
                                <option value='97.8'>Midland, TX</option>
                                <option value='93.8'>Milwaukee, WI</option>
                                <option value='90.7'>Minot, ND</option>
                                <option value='103.4'>Missoula, MT</option>
                                <option value='88.3'>Mobile, AL</option>
                                <option value='112.3'>Modesto, CA</option>
                                <option value='86.5'>Monroe, LA</option>
                                <option value='90.5'>Monroe, MI</option>
                                <option value='88.5'>Montgomery, AL</option>
                                <option value='102.2'>Morehead City, NC</option>
                                <option value='88.5'>Morgantown, WV</option>
                                <option value='87.3'>Morristown, TN</option>
                                <option value='95.7'>Moses Lake, WA</option>
                                <option value='89'>Mount Airy, NC</option>
                                <option value='86.8'>Mount Pleasant, MI</option>
                                <option value='110.1'>Mount Vernon, WA</option>
                                <option value='83.7'>Muncie, IN</option>
                                <option value='87.7'>Muskegon, MI</option>
                                <option value='81.3'>Muskogee, OK</option>
                                <option value='94.7'>Myrtle Beach, SC</option>
                                <option value='89.6'>Nacogdoches, TX</option>
                                <option value='149.6'>Napa, CA</option>
                                <option value='109.4'>Naples, FL</option>
                                <option value='100.1'>Nashville, TN</option>
                                <option value='90.2'>New Bern, NC</option>
                                <option value='88.1'>New Castle, PA</option>
                                <option value='107.7'>New Haven, CT</option>
                                <option value='92.4'>New Orleans, LA</option>
                                <option value='88.9'>New Philadelphia, OH</option>
                                <option value='128'>New York, NY</option>
                                <option value='89.7'>Niles, MI</option>
                                <option value='90.5'>North Wilkesboro, NC</option>
                                <option value='125.2'>Oak Harbor, WA</option>
                                <option value='94.5'>Ocala, FL</option>
                                <option value='109.5'>Ocean City, NJ</option>
                                <option value='92.7'>Odessa, TX</option>
                                <option value='99.8'>Ogden, UT</option>
                                <option value='88.3'>Ogdensburg, NY</option>
                                <option value='87.3'>Oklahoma City, OK</option>
                                <option value='89'>Olean, NY</option>
                                <option value='110.9'>Olympia, WA</option>
                                <option value='92.9'>Omaha, NE</option>
                                <option value='86.1'>Opelousas, LA</option>
                                <option value='85.3'>Orangeburg, SC</option>
                                <option value='101.4'>Orlando, FL</option>
                                <option value='89'>Oshkosh, WI</option>
                                <option value='86.6'>Ottawa, IL</option>
                                <option value='86.6'>Owensboro, KY</option>
                                <option value='84.8'>Owosso, MI</option>
                                <option value='85.7'>Paducah, KY</option>
                                <option value='93.2'>Palatka, FL</option>
                                <option value='101.9'>Panama City, FL</option>
                                <option value='84.7'>Parckersburg, WV</option>
                                <option value='97.9'>Pensacola, FL</option>
                                <option value='86.7'>Peoria, IL</option>
                                <option value='103.4'>Philadelphia, PA</option>
                                <option value='104.3'>Phoenix, AZ</option>
                                <option value='82.3'>Pine Bluff, AR</option>
                                <option value='93.1'>Pittsburgh, NY</option>
                                <option value='106.4'>Pittsfield, MA</option>
                                <option value='93.7'>Plattsburgh, NY</option>
                                <option value='90.8'>Pocatello, ID</option>
                                <option value='109.1'>Port Angeles, WA</option>
                                <option value='101.1'>Port St. Lucie, FL</option>
                                <option value='113'>Portland, ME</option>
                                <option value='116.5'>Portland, OR</option>
                                <option value='84.7'>Portsmouth, OH</option>
                                <option value='87'>Pottsville, PA</option>
                                <option value='104.6'>Prescott, AZ</option>
                                <option value='111.5'>Providence, RI</option>
                                <option value='100.9'>Provo, UT</option>
                                <option value='92.2'>Pueblo, CO</option>
                                <option value='100.3'>Punta Gorda, FL</option>
                                <option value='87.3'>Quincy, IL</option>
                                <option value='90.9'>Racine, WI</option>
                                <option value='99.7'>Raleigh, NC</option>
                                <option value='94.2'>Rapid City, SD</option>
                                <option value='96'>Reading, PA</option>
                                <option value='108.7'>Redding, CA</option>
                                <option value='107.4'>Reno, NV</option>
                                <option value='84.2'>Richmond, IN</option>
                                <option value='99.2'>Richmond, VA</option>
                                <option value='90.8'>Richmond, KY</option>
                                <option value='116.1'>Riverside, CA</option>
                                <option value='83.1'>Roanoke Rapids, NC</option>
                                <option value='94.1'>Roanoke, VA</option>
                                <option value='97.3'>Rochester, MN</option>
                                <option value='96.6'>Rochester, IL</option>
                                <option value='87.2'>Rockford, IL</option>
                                <option value='88.3'>Rocky Mount, NC</option>
                                <option value='89.6'>Rome, GA</option>
                                <option value='100.8'>Roseburg, OR</option>
                                <option value='86.3'>Roswell, NM</option>
                                <option value='85.5'>Russelville, AR</option>
                                <option value='120.3'>Sacramento, CA</option>
                                <option value='84'>Saginaw, MI</option>
                                <option value='105.8'>Salem, OR</option>
                                <option value='138.3'>Salinas, CA</option>
                                <option value='103.2'>Salisbury, MD</option>
                                <option value='105.9'>Salt Lake City, UT</option>
                                <option value='90.7'>San Angelo, TX</option>
                                <option value='92.7'>San Antonio, TX</option>
                                <option value='136.2'>San Diego, CA</option>
                                <option value='178.6'>San Francisco, CA</option>
                                <option value='173.5'>San Jose, CA</option>
                                <option value='136.1'>San Luis Obispo, CA</option>
                                <option value='90.8'>Sandusky, OH</option>
                                <option value='163.9'>Santa Cruz, CA</option>
                                <option value='105.1'>Santa Fe, NM</option>
                                <option value='141.7'>Santa Rose, CA</option>
                                <option value='97.3'>Savannah, GA</option>
                                <option value='91.3'>Scranton, PA</option>
                                <option value='85.4'>Searcy, AR</option>
                                <option value='124.6'>Seattle, WA</option>
                                <option value='93.1'>Sebring, FL</option>
                                <option value='94'>Seneca, SC</option>
                                <option value='103.5'>Sevierville, TN</option>
                                <option value='82.4'>Shawnee, OK</option>
                                <option value='89.7'>Sheboygan, WI</option>
                                <option value='88.1'>Shelby, NC</option>
                                <option value='109.6'>Shelton, WA</option>
                                <option value='91.3'>Sherman, TX</option>
                                <option value='101.9'>Show Low, AZ</option>
                                <option value='85.8'>Shreveport, LA</option>
                                <option value='93.2'>Sierra Vista, AZ</option>
                                <option value='87.1'>Sioux City, IA</option>
                                <option value='92.8'>Sioux Falls, SD</option>
                                <option value='89.3'>Somerset, PA</option>
                                <option value='87.2'>South Bend, IN</option>
                                <option value='91'>Spartanburg, SC</option>
                                <option value='100.4'>Spokane, WA</option>
                                <option value='87.5'>Springfield, IL</option>
                                <option value='95.4'>St. Cloud, MN</option>
                                <option value='98'>St. George, UT</option>
                                <option value='85.5'>St. Joseph, MO</option>
                                <option value='89.6'>St. Louis, MO</option>
                                <option value='99.8'>State College, PA</option>
                                <option value='91.1'>Statesboro, GA</option>
                                <option value='86.3'>Stillwater, OK</option>
                                <option value='113.6'>Stockton, CA</option>
                                <option value='88.1'>Sumter, SC</option>
                                <option value='88.6'>Sunbury, PA</option>
                                <option value='95.1'>Syracuse, NY</option>
                                <option value='87.4'>Talladega, AL</option>
                                <option value='96.4'>Tallahassee, FL</option>
                                <option value='101.4'>Tampa, FL</option>
                                <option value='84.7'>Terre Haute, IN</option>
                                <option value='86.3'>Texarkana, TX</option>
                                <option value='100.7'>The Villages, FL</option>
                                <option value='87.5'>Toledo, OH</option>
                                <option value='85.6'>Topeka, KS</option>
                                <option value='105.2'>Torrington, CT</option>
                                <option value='99.6'>Traverse City, MI</option>
                                <option value='104.3'>Trenton, NJ</option>
                                <option value='132.8'>Truckee, CA</option>
                                <option value='97.7'>Tucson, AZ</option>
                                <option value='88.7'>Tullahoma, TN</option>
                                <option value='86.7'>Tulsa, OK</option>
                                <option value='87.2'>Tupelo, MS</option>
                                <option value='91'>Tuscaloosa, AL</option>
                                <option value='91.2'>Twin Falls, ID</option>
                                <option value='92.8'>Tyler, TX</option>
                                <option value='128'>Ukiah, CA</option>
                                <option value='94.1'>Utica, NY</option>
                                <option value='89.2'>Valdosta, GA</option>
                                <option value='125.2'>Vallejo, CA</option>
                                <option value='97.8'>Vineland, NJ</option>
                                <option value='99'>Virginia Beach, VA</option>
                                <option value='103.6'>Visalia, CA</option>
                                <option value='89.5'>Waco, TX</option>
                                <option value='100.9'>Walla Walla, WA</option>
                                <option value='90.5'>Warner Robins, GA</option>
                                <option value='92.3'>Warsaw, IN</option>
                                <option value='120.1'>Washington, DC</option>
                                <option value='87.6'>Waterloo, IA</option>
                                <option value='97.1'>Watertown, WI</option>
                                <option value='96.4'>Watertown, NY</option>
                                <option value='88.9'>Wausau, WI</option>
                                <option value='106.6'>Wenatchee, WA</option>
                                <option value='97.7'>Whitewater, WI</option>
                                <option value='85.7'>Wichita Falls, TX</option>
                                <option value='86.8'>Wichita, KS</option>
                                <option value='93.4'>Williamsport, PA</option>
                                <option value='99'>Wilmington, NC</option>
                                <option value='86.3'>Wilson, NC</option>
                                <option value='97.2'>Winchester, VA</option>
                                <option value='91.2'>Winston-Salem, NC</option>
                                <option value='95.5'>Wooster, OH</option>
                                <option value='113.2'>Worcester, MA</option>
                                <option value='97.5'>Yakima, WA</option>
                                <option value='95.8'>York, PA</option>
                                <option value='86.4'>Youngstown, OH</option>
                                <option value='108.7'>Yuba City, CA</option>
                                <option value='94.5'>Yuma, AZ</option>
                                <option value='87.6'>Zanesville, OH</option>
                                <option value='89'>Bloomington, IL</option>
                                <option value='104.8'>California, MD</option>
                                <option value='104.7'>Crestview, FL</option>
                                <option value='127.8'>Glenwood Springs, CO</option>
                                <option value='106.2'>Greenfield Town, MA</option>
                                <option value='97.9'>Hermiston, OR</option>
                                <option value='96.2'>Holland, MI</option>
                                <option value='97.4'>Jefferson, GA</option>
                                <option value='88.7'>Lafayette, IN</option>
                                <option value='140.6'>Los Angeles, CA</option>
                                <option value='104.4'>Sarasota, FL</option>
                                <option value='86.6'>Salem, OH</option>
                                <option value='143'>Santa Maria, CA</option>
                                <option value='158'>Honolulu, HI</option>
                                <option value='86.9'>Wisconsin Rapids, WI</option>
                                <option value='119.2'>Stanford, CT</option>
                                <option value='101.5'>Fort Myers, FL</option>
                                <option value='98.5'>Dallas, TX</option>
                                <option value='87.2'>Davenport, IA</option>
                                <option value='99.6'>Daytona Beach, FL</option>
                                <option value='99.7'>Hagerstown, MD</option>
                                <option value='95.2'>Logan, UT</option>
                                <option value='91.6'>Louisville, KY</option>
                                <option value='110.1'>Miami, FL</option>
                                <option value='105.4'>Minneapolis, MN</option>
                                <option value='132.2'>Ventura, CA</option>
                                <option value='99.3'>Melbourne, FL</option>
                                <option value='98.9'>Vero Beach, FL</option>
                                <option value='82.6'>Weirton, WV</option>
                                <option value='84.1'>Wheeling, WV</option>
                                <option value='105.9'>New London, CT</option>
                                <option value='96.6'>Daphne, AL</option>
                                <option value='89.5' label='Victoria, TX'>Victoria, TX</option>
                                <option value='97.6' >Aberdeen, WA</option>
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
                                <option value='136.9'>Hilo, HI</option>
                                <option value='109.4'>Hilton Head Island</option>
                                <option value='90.8'>Hinesville, GA</option>
                                <option value='87.7'>Hobbs, NM</option>
                                <option value='95.5'>Homosassa Springs, FL</option>
                                <option value='87.3'>Hot Springs, AR</option>
                                <option value='89.9'>Houma, LA</option>
                                <option value='95.8'>Houston, TX</option>
                                <option value='84.3'>Huntington, WV</option>
                                <option value='91.3'>Huntsville, AL</option>
                                <option value='91.2'>Huntsville, TX</option>
                                <option value='84'>Hutchinson, KS</option>
                                <option value='91.7'>Idaho Falls, ID</option>
                                <option value='90.8'>Indiana, PA</option>
                                <option value='90.2'>Indianapolis, IN</option>
                                <option value='93.5'>Iowa City, IA</option>
                                <option value='101.7'>Ithaca, NY</option>
                                <option value='87.4'>Jackson, MI</option>
                                <option value='87.8'>Jackson, MS</option>
                                <option value='85.2'>Jackson, TN</option>
                                <option value='99'>Jacksonville, FL</option>
                                <option value='91.7'>Jacksonville, NC</option>
                                <option value='91.3'>Jamestown, NY</option>
                                <option value='89.8'>Janesville, WI</option>
                                <option value='86.3'>Jefferson City, MO</option>
                                <option value='88.1'>Johnson City, TN</option>
                                <option value='87.6'>Johnstown, PA</option>
                                <option value='85.2'>Jonesboro, AR</option>
                                <option value='158.5'>Kahului, HI</option>
                                <option value='89.3'>Kalamazoo, MI</option>
                                <option value='112.7'>Kalispell, MT</option>
                                <option value='91'>Kankakee, IL</option>
                                <option value='91.6'>Kansas City, MO</option>
                                <option value='164.9'>Kapaa, HI</option>
                                <option value='102.1'>Keene, NH</option>
                                <option value='99.7'>Kennewick, WA</option>
                                <option value='140'>Key West, FL</option>
                                <option value='88.6'>Kileen, TX</option>
                                <option value='86'>Kingsport, TN</option>
                                <option value='106.1'>Kingston, NY</option>
                                <option value='97.1'>Klamath Falls, OR</option>
                                <option value='91.6'>Knoxville, TN</option>
                                <option value='84.9'>Kokomo, IN</option>
                                <option value='91.8'>La Crosse, WI</option>
                                <option value='89.6'>Lafayette, LA</option>
                                <option value='86'>LaGrange, GA</option>
                                <option value='89.4'>Lake Charles, LA</option>
                                <option value='93.6'>Lake City, FL</option>
                                <option value='98.4'>Lake Havasu City, AZ</option>
                                <option value='96.4'>Lakeland, FL</option>
                                <option value='99.5'>Lancaster, PA</option>
                                <option value='88.7'>Lansing, MI</option>
                                <option value='90.1'>Laredo, TX</option>
                                <option value='88.8'>Las Cruces, NM</option>
                                <option value='100.7'>Las Vegas, NV</option>
                                <option value='85.9'>Laurel, MS</option>
                                <option value='91.6'>Lawrence, KS</option>
                                <option value='82.8'>Lawton, OK</option>
                                <option value='95.4'>Lebanon, PA</option>
                                <option value='92.5'>Lewiston, ID</option>
                                <option value='99.7'>Lewiston, ME</option>
                                <option value='91.1'>Lexington, KY</option>
                                <option value='87.2'>Lima, OH</option>
                                <option value='94.7'>Lincoln, NE</option>
                                <option value='88'>Little Rock, AR</option>
                                <option value='84.6'>London, KY</option>
                                <option value='88.5'>Longview, TX</option>
                                <option value='101.6'>Longview, WA</option>
                                <option value='88.8'>Lubbock, TX</option>
                                <option value='88.2'>Lufkin, TX</option>
                                <option value='83.4'>Lumberton, NC</option>
                                <option value='93.6'>Lynchburg, VA</option>
                                <option value='87.2'>Macon, GA</option>
                                <option value='108.9'>Madera, CA</option>
                                <option value='99.5'>Madison, WI</option>
                                <option value='109.6'>Manchester, NH</option>
                                <option value='89.6'>Manhattan, KS</option>
                                <option value='87.8'>Manitowoc, WI</option>
                                <option value='95.3'>Makato, MN</option>
                                <option value='86.2'>Mansfield, OH</option>
                                <option value='86.6'>Marinette, WI</option>
                                <option value='81.8'>Marion, IN</option>
                                <option value='85.7'>Marion, OH</option>
                                <option value='91.3'>Marquette, MI</option>
                                <option value='89.9'>Marshall, TX</option>
                                <option value='85'>Martinsville, VA</option>
                                <option value='86'>McAllen, TX</option>
                                <option value='88.5'>Meadville, PA</option>
                                <option value='107.5'>Medford, OR</option>
                                <option value='88.2'>Memphis, TN</option>
                                <option value='108.2'>Merced, CA</option>
                                <option value='82'>Meridian, MS</option>
                                <option value='87.8'>Michigan City, IN</option>
                                <option value='87'>Midland, MI</option>
                                <option value='97.8'>Midland, TX</option>
                                <option value='93.8'>Milwaukee, WI</option>
                                <option value='90.7'>Minot, ND</option>
                                <option value='103.4'>Missoula, MT</option>
                                <option value='88.3'>Mobile, AL</option>
                                <option value='112.3'>Modesto, CA</option>
                                <option value='86.5'>Monroe, LA</option>
                                <option value='90.5'>Monroe, MI</option>
                                <option value='88.5'>Montgomery, AL</option>
                                <option value='102.2'>Morehead City, NC</option>
                                <option value='88.5'>Morgantown, WV</option>
                                <option value='87.3'>Morristown, TN</option>
                                <option value='95.7'>Moses Lake, WA</option>
                                <option value='89'>Mount Airy, NC</option>
                                <option value='86.8'>Mount Pleasant, MI</option>
                                <option value='110.1'>Mount Vernon, WA</option>
                                <option value='83.7'>Muncie, IN</option>
                                <option value='87.7'>Muskegon, MI</option>
                                <option value='81.3'>Muskogee, OK</option>
                                <option value='94.7'>Myrtle Beach, SC</option>
                                <option value='89.6'>Nacogdoches, TX</option>
                                <option value='149.6'>Napa, CA</option>
                                <option value='109.4'>Naples, FL</option>
                                <option value='100.1'>Nashville, TN</option>
                                <option value='90.2'>New Bern, NC</option>
                                <option value='88.1'>New Castle, PA</option>
                                <option value='107.7'>New Haven, CT</option>
                                <option value='92.4'>New Orleans, LA</option>
                                <option value='88.9'>New Philadelphia, OH</option>
                                <option value='128'>New York, NY</option>
                                <option value='89.7'>Niles, MI</option>
                                <option value='90.5'>North Wilkesboro, NC</option>
                                <option value='125.2'>Oak Harbor, WA</option>
                                <option value='94.5'>Ocala, FL</option>
                                <option value='109.5'>Ocean City, NJ</option>
                                <option value='92.7'>Odessa, TX</option>
                                <option value='99.8'>Ogden, UT</option>
                                <option value='88.3'>Ogdensburg, NY</option>
                                <option value='87.3'>Oklahoma City, OK</option>
                                <option value='89'>Olean, NY</option>
                                <option value='110.9'>Olympia, WA</option>
                                <option value='92.9'>Omaha, NE</option>
                                <option value='86.1'>Opelousas, LA</option>
                                <option value='85.3'>Orangeburg, SC</option>
                                <option value='101.4'>Orlando, FL</option>
                                <option value='89'>Oshkosh, WI</option>
                                <option value='86.6'>Ottawa, IL</option>
                                <option value='86.6'>Owensboro, KY</option>
                                <option value='84.8'>Owosso, MI</option>
                                <option value='85.7'>Paducah, KY</option>
                                <option value='93.2'>Palatka, FL</option>
                                <option value='101.9'>Panama City, FL</option>
                                <option value='84.7'>Parckersburg, WV</option>
                                <option value='97.9'>Pensacola, FL</option>
                                <option value='86.7'>Peoria, IL</option>
                                <option value='103.4'>Philadelphia, PA</option>
                                <option value='104.3'>Phoenix, AZ</option>
                                <option value='82.3'>Pine Bluff, AR</option>
                                <option value='93.1'>Pittsburgh, NY</option>
                                <option value='106.4'>Pittsfield, MA</option>
                                <option value='93.7'>Plattsburgh, NY</option>
                                <option value='90.8'>Pocatello, ID</option>
                                <option value='109.1'>Port Angeles, WA</option>
                                <option value='101.1'>Port St. Lucie, FL</option>
                                <option value='113'>Portland, ME</option>
                                <option value='116.5'>Portland, OR</option>
                                <option value='84.7'>Portsmouth, OH</option>
                                <option value='87'>Pottsville, PA</option>
                                <option value='104.6'>Prescott, AZ</option>
                                <option value='111.5'>Providence, RI</option>
                                <option value='100.9'>Provo, UT</option>
                                <option value='92.2'>Pueblo, CO</option>
                                <option value='100.3'>Punta Gorda, FL</option>
                                <option value='87.3'>Quincy, IL</option>
                                <option value='90.9'>Racine, WI</option>
                                <option value='99.7'>Raleigh, NC</option>
                                <option value='94.2'>Rapid City, SD</option>
                                <option value='96'>Reading, PA</option>
                                <option value='108.7'>Redding, CA</option>
                                <option value='107.4'>Reno, NV</option>
                                <option value='84.2'>Richmond, IN</option>
                                <option value='99.2'>Richmond, VA</option>
                                <option value='90.8'>Richmond, KY</option>
                                <option value='116.1'>Riverside, CA</option>
                                <option value='83.1'>Roanoke Rapids, NC</option>
                                <option value='94.1'>Roanoke, VA</option>
                                <option value='97.3'>Rochester, MN</option>
                                <option value='96.6'>Rochester, IL</option>
                                <option value='87.2'>Rockford, IL</option>
                                <option value='88.3'>Rocky Mount, NC</option>
                                <option value='89.6'>Rome, GA</option>
                                <option value='100.8'>Roseburg, OR</option>
                                <option value='86.3'>Roswell, NM</option>
                                <option value='85.5'>Russelville, AR</option>
                                <option value='120.3'>Sacramento, CA</option>
                                <option value='84'>Saginaw, MI</option>
                                <option value='105.8'>Salem, OR</option>
                                <option value='138.3'>Salinas, CA</option>
                                <option value='103.2'>Salisbury, MD</option>
                                <option value='105.9'>Salt Lake City, UT</option>
                                <option value='90.7'>San Angelo, TX</option>
                                <option value='92.7'>San Antonio, TX</option>
                                <option value='136.2'>San Diego, CA</option>
                                <option value='178.6'>San Francisco, CA</option>
                                <option value='173.5'>San Jose, CA</option>
                                <option value='136.1'>San Luis Obispo, CA</option>
                                <option value='90.8'>Sandusky, OH</option>
                                <option value='163.9'>Santa Cruz, CA</option>
                                <option value='105.1'>Santa Fe, NM</option>
                                <option value='141.7'>Santa Rose, CA</option>
                                <option value='97.3'>Savannah, GA</option>
                                <option value='91.3'>Scranton, PA</option>
                                <option value='85.4'>Searcy, AR</option>
                                <option value='124.6'>Seattle, WA</option>
                                <option value='93.1'>Sebring, FL</option>
                                <option value='94'>Seneca, SC</option>
                                <option value='103.5'>Sevierville, TN</option>
                                <option value='82.4'>Shawnee, OK</option>
                                <option value='89.7'>Sheboygan, WI</option>
                                <option value='88.1'>Shelby, NC</option>
                                <option value='109.6'>Shelton, WA</option>
                                <option value='91.3'>Sherman, TX</option>
                                <option value='101.9'>Show Low, AZ</option>
                                <option value='85.8'>Shreveport, LA</option>
                                <option value='93.2'>Sierra Vista, AZ</option>
                                <option value='87.1'>Sioux City, IA</option>
                                <option value='92.8'>Sioux Falls, SD</option>
                                <option value='89.3'>Somerset, PA</option>
                                <option value='87.2'>South Bend, IN</option>
                                <option value='91'>Spartanburg, SC</option>
                                <option value='100.4'>Spokane, WA</option>
                                <option value='87.5'>Springfield, IL</option>
                                <option value='95.4'>St. Cloud, MN</option>
                                <option value='98'>St. George, UT</option>
                                <option value='85.5'>St. Joseph, MO</option>
                                <option value='89.6'>St. Louis, MO</option>
                                <option value='99.8'>State College, PA</option>
                                <option value='91.1'>Statesboro, GA</option>
                                <option value='86.3'>Stillwater, OK</option>
                                <option value='113.6'>Stockton, CA</option>
                                <option value='88.1'>Sumter, SC</option>
                                <option value='88.6'>Sunbury, PA</option>
                                <option value='95.1'>Syracuse, NY</option>
                                <option value='87.4'>Talladega, AL</option>
                                <option value='96.4'>Tallahassee, FL</option>
                                <option value='101.4'>Tampa, FL</option>
                                <option value='84.7'>Terre Haute, IN</option>
                                <option value='86.3'>Texarkana, TX</option>
                                <option value='100.7'>The Villages, FL</option>
                                <option value='87.5'>Toledo, OH</option>
                                <option value='85.6'>Topeka, KS</option>
                                <option value='105.2'>Torrington, CT</option>
                                <option value='99.6'>Traverse City, MI</option>
                                <option value='104.3'>Trenton, NJ</option>
                                <option value='132.8'>Truckee, CA</option>
                                <option value='97.7'>Tucson, AZ</option>
                                <option value='88.7'>Tullahoma, TN</option>
                                <option value='86.7'>Tulsa, OK</option>
                                <option value='87.2'>Tupelo, MS</option>
                                <option value='91'>Tuscaloosa, AL</option>
                                <option value='91.2'>Twin Falls, ID</option>
                                <option value='92.8'>Tyler, TX</option>
                                <option value='128'>Ukiah, CA</option>
                                <option value='94.1'>Utica, NY</option>
                                <option value='89.2'>Valdosta, GA</option>
                                <option value='125.2'>Vallejo, CA</option>
                                <option value='97.8'>Vineland, NJ</option>
                                <option value='99'>Virginia Beach, VA</option>
                                <option value='103.6'>Visalia, CA</option>
                                <option value='89.5'>Waco, TX</option>
                                <option value='100.9'>Walla Walla, WA</option>
                                <option value='90.5'>Warner Robins, GA</option>
                                <option value='92.3'>Warsaw, IN</option>
                                <option value='120.1'>Washington, DC</option>
                                <option value='87.6'>Waterloo, IA</option>
                                <option value='97.1'>Watertown, WI</option>
                                <option value='96.4'>Watertown, NY</option>
                                <option value='88.9'>Wausau, WI</option>
                                <option value='106.6'>Wenatchee, WA</option>
                                <option value='97.7'>Whitewater, WI</option>
                                <option value='85.7'>Wichita Falls, TX</option>
                                <option value='86.8'>Wichita, KS</option>
                                <option value='93.4'>Williamsport, PA</option>
                                <option value='99'>Wilmington, NC</option>
                                <option value='86.3'>Wilson, NC</option>
                                <option value='97.2'>Winchester, VA</option>
                                <option value='91.2'>Winston-Salem, NC</option>
                                <option value='95.5'>Wooster, OH</option>
                                <option value='113.2'>Worcester, MA</option>
                                <option value='97.5'>Yakima, WA</option>
                                <option value='95.8'>York, PA</option>
                                <option value='86.4'>Youngstown, OH</option>
                                <option value='108.7'>Yuba City, CA</option>
                                <option value='94.5'>Yuma, AZ</option>
                                <option value='87.6'>Zanesville, OH</option>
                                <option value='89'>Bloomington, IL</option>
                                <option value='104.8'>California, MD</option>
                                <option value='104.7'>Crestview, FL</option>
                                <option value='127.8'>Glenwood Springs, CO</option>
                                <option value='106.2'>Greenfield Town, MA</option>
                                <option value='97.9'>Hermiston, OR</option>
                                <option value='96.2'>Holland, MI</option>
                                <option value='97.4'>Jefferson, GA</option>
                                <option value='88.7'>Lafayette, IN</option>
                                <option value='140.6'>Los Angeles, CA</option>
                                <option value='104.4'>Sarasota, FL</option>
                                <option value='86.6'>Salem, OH</option>
                                <option value='143'>Santa Maria, CA</option>
                                <option value='158'>Honolulu, HI</option>
                                <option value='86.9'>Wisconsin Rapids, WI</option>
                                <option value='119.2'>Stanford, CT</option>
                                <option value='101.5'>Fort Myers, FL</option>
                                <option value='98.5'>Dallas, TX</option>
                                <option value='87.2'>Davenport, IA</option>
                                <option value='99.6'>Daytona Beach, FL</option>
                                <option value='99.7'>Hagerstown, MD</option>
                                <option value='95.2'>Logan, UT</option>
                                <option value='91.6'>Louisville, KY</option>
                                <option value='110.1'>Miami, FL</option>
                                <option value='105.4'>Minneapolis, MN</option>
                                <option value='132.2'>Ventura, CA</option>
                                <option value='99.3'>Melbourne, FL</option>
                                <option value='98.9'>Vero Beach, FL</option>
                                <option value='82.6'>Weirton, WV</option>
                                <option value='84.1'>Wheeling, WV</option>
                                <option value='105.9'>New London, CT</option>
                                <option value='96.6'>Daphne, AL</option>
                                <option value='89.5'>Victoria, TX</option>
                                <option value='97.6'>Aberdeen, WA</option>
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
