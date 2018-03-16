import './Week.less';
import React from 'react';
import Day from '../day/Day.jsx';
import { WEEK, dateWork } from '../../../common';

class Week extends React.Component {
  renderDays () {
    const {month, day, date, dayIndex} = dateWork();
    return WEEK.map((dayName, i) => {
      const _date = dayName === day ? date : date - dayIndex + i;
      const className = date === _date ? 'today' : date < _date ? 'future' : 'past';
      return <Day
        key={`${month}-${day}-${i}`}
        dayId={`${dayName}-${day}`}
        dayName={dayName}
        className={className}
        date={_date}/>
    });
  }
  
  render () {
    return <div className="week">
      <div className="head">What you need to do on this week?</div>
      <div className="days">
        {this.renderDays()}
      </div>
    </div>
  }
}

export default Week;
