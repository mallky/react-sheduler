import './Day.less';
import React from 'react';
import DayHour from './day-hour/DayHour.jsx';
import { connect } from 'react-redux';
import { DAY_HOURS } from '../../../common';

const mapStateToProps = (state) => ({
  todo: state.todos.todo
});

@connect(mapStateToProps)
class Day extends React.Component {
  constructor (props) {
    super(props);
  }

  renderDay () {
    const task = this.props.todo ? this.props.todo.task : '';

    return DAY_HOURS.map((hour, i) => {
      return <DayHour key={i} task={task} hour={`${hour}`}/>
    });
  }

  render () {
    let date = new Date();

    return <div className="day">
      <div>Today</div>
      <div>
        {date.getDate()} March
      </div>
      {this.renderDay()}
    </div>
  }
}

export default Day;