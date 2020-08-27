import React, { useState,useEffect } from 'react';
import david from "../images/david.jpg";
import left from "../images/back.svg";
import right from "../images/next.png";
import DateDayShow from './DateDayShow';
const DoctorPage = () => {
{/*=========================== Intianlzing all values and assign all values ===============================*/}

{/* month assign values */}
const month_arr = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
const indexOfcurrentMonth = new Date().getMonth();
const [month,setMonth]  =useState(month_arr[indexOfcurrentMonth]);
{/* year assign values */}
const curYear = new Date().getFullYear();    
const [year,setYear] = useState(curYear);

{/* day asign values */}
const day_arr = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
const todayDate = new Date().getDate();
const todayDay = new Date().getDay();
const [date,setDate] = useState(todayDate);
const [day,setDay] = useState(day_arr[todayDay]);

{/*==================================== Month increament ==================================================*/}
    const leftgoHandlerMonth = () => {
        const indexofMonthleft = month_arr.indexOf(month);
        window.indexofMonthOutSideLwft = indexofMonthleft; 
        if(month == month_arr[0]){
            setMonth(month_arr[11])
        }else{
            setMonth(month_arr[indexofMonthleft-1])
        }
    }
    const rightgoHandlerMonth = () => {
        const indexofMonthright = month_arr.indexOf(month);
        window.indexofMonthOutSideRight = indexofMonthright;
        if(month == month_arr[11]){
            setMonth(month_arr[0])
        }else{
            setMonth(month_arr[indexofMonthright+1])
        }
      
}

const getDatesOfCurrentMonth = new Date(year,window.indexofMonthOutSideLwft,0).getDate();
const arrayofdateOfCurrentMonth = []
for( var i=1 ; i<= getDatesOfCurrentMonth ; i++ ){
    arrayofdateOfCurrentMonth.push(i);
}
console.log(arrayofdateOfCurrentMonth)
{/*======================================= year increment decrement =======================================*/}

    const leftgoHandleryear = () => {
        setYear(year - 1)
    }
    const rightgoHandleryear = () => {
        setYear(year + 1)
    }

{/*======================================= date and day increament =========================================*/}





        return (
        <>
        {/*============================== doctor profile/describtion and icons ============================*/}
        <div className="Container">
            <figure className="Image_portion">
                <img src={david}/>
                <figcaption>
                    <b>Dr. Schnoopy Blooper</b><br/>
                    <i>Dermatologist</i><br/>
                    <b>Newyork,USA</b>
                </figcaption>
            </figure>
            <div className="doctor-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="col-lg-3 col-md-3">
                
            </div>
        </div>
        {/*============================ heading month and year select carosuel =============================*/}
        <main>
            <h3>Select your preferred date and time</h3>
            <div className="month_year">
                    <table>
                        <tr>
                            <td><a onClick={leftgoHandlerMonth} style={{cursor:'pointer'}}><img src={left} style={{width:'2rem',height:'2rem'}}/></a></td>
                            <td><b>{month}</b></td>
                            <td><a onClick={rightgoHandlerMonth} style={{cursor:'pointer'}}><img src={right} style={{width:'2rem',height:'2rem'}}/></a></td>
                        </tr>
                    </table>          
                <table>
                    <tr>
                    <td><a onClick={leftgoHandleryear} style={{cursor:'pointer'}}><img src={left} style={{width:'2rem',height:'2rem'}}/></a></td>
                    <td><b>{year}</b></td>
                    <td><a onClick={rightgoHandleryear} style={{cursor:'pointer'}}><img src={right} style={{width:'2rem',height:'2rem'}}/></a></td>
                    </tr>
                </table>
            </div>
        </main>
        {/*==================================== date month day selection ==================================*/}
        <div className="date_select">
            <div><a ><img src={left} style={{width:'64px',height:'64px'}}/></a></div>
                {
                arrayofdateOfCurrentMonth.map( (val) =>
                <DateDayShow date={val}month={month} day={day}/>
                )}
            <div><a ><img src={right} style={{width:'64px',height:'64px'}}/></a></div>
        </div>
        {/*============================================ timing section ====================================*/}
        <table className="timing_table">  
            <tr>
                <td rowSpan="2">MORNING</td>
                <td><a>9:00 AM-9:30 AM</a></td>
                <td><a>9:00 AM-9:30 AM</a></td>
                <td><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
            </tr>
            <tr>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
            </tr>
            <tr>
                <td>AFTERNOON</td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
            </tr>
            <tr>
                <td>EVENING</td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
                <td ><a>9:00 AM-9:30 AM</a></td>
            </tr>
        </table>
        </>
        )
}
export default DoctorPage;
