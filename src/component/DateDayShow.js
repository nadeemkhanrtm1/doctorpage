import React, { Component } from 'react'

const DateDayShow = (props) => {
        return (
            <a className="month_date_day">
                <b>{props.month}</b><br/>
                <b>{props.date}</b><br/>
                <b>{props.day}</b><br/>
            </a>
        )
}
export default DateDayShow;